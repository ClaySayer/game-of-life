import { createSlice } from '@reduxjs/toolkit';
import {
  loadDieHard,
  loadGlider,
  loadLWSpaceship,
  presetGrids,
} from './presetGrids';
import { emptyGrid } from './presetGrids';

const initialState = {
  rows: 40,
  columns: 40,
  isContinuous: false,
  grid: emptyGrid(),
  evolutionRate: 500,
  isEvolving: false,
};

const countNeighbours = (grid, rowId, columnId) => {
  const rowOffset = [-1, -1, -1, 0, 0, 1, 1, 1];
  const columnOffset = [-1, 0, 1, -1, 1, -1, 0, 1];
  const result = rowOffset.reduce((acc, curr, index) => {
    const offsetCellIndexes = {
      row: rowId + curr,
      column: columnId + columnOffset[index],
    };
    if (
      offsetCellIndexes.row < 0 ||
      offsetCellIndexes.row >= grid.length ||
      offsetCellIndexes.column < 0 ||
      offsetCellIndexes.column >= grid[0].length
    ) {
      return acc;
    }
    const currentCell = grid[rowId + curr][columnId + columnOffset[index]];
    if (currentCell.isAlive) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return result;
};

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    toggleIsAlive(state, { payload }) {
      const result = state.grid.map((row, rowId) =>
        row.map((column, columnId) => {
          if (rowId === payload.rowId && columnId === payload.columnId) {
            return { isAlive: !payload.isAlive };
          }
          return column;
        }),
      );
      return (state = { ...state, grid: result });
    },
    evolveGrid(state, { payload }) {
      const result = payload.map((row, rowId) =>
        row.map((column, columnId) => {
          const currentCell = payload[rowId][columnId];
          const count = countNeighbours(state.grid, rowId, columnId);
          if ((count === 2 && currentCell.isAlive) || count === 3) {
            return { ...column, isAlive: true };
          }
          return { ...column, isAlive: false };
        }),
      );
      return (state = { ...state, grid: result });
    },
    clearGrid(state) {
      return (state = { ...initialState });
    },
    startEvolving(state) {
      if (state.evolutionRate > 0) {
        return (state = { ...state, isEvolving: true });
      }
      return state;
    },
    stopEvolving(state) {
      return (state = { ...state, isEvolving: false });
    },
    loadGrid(state, action) {
      switch (action.payload) {
        case presetGrids.glider:
          return (state = { ...state, grid: loadGlider() });
        case presetGrids.dieHard:
          return (state = { ...state, grid: loadDieHard() });
        case presetGrids.lwSpaceship:
          return (state = { ...state, grid: loadLWSpaceship() });
        default:
          return state;
      }
    },
    setEvoultionRate(state, action) {
      if (action.payload > 0) {
        return (state = { ...state, evolutionRate: action.payload });
      }
      return state;
    },
  },
});
export const {
  toggleIsAlive,
  evolveGrid,
  clearGrid,
  startEvolving,
  stopEvolving,
  loadGrid,
  setEvoultionRate,
} = gridSlice.actions;
export default gridSlice.reducer;
