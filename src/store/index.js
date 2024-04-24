import { configureStore } from '@reduxjs/toolkit';
import gridReducer, {
  evolveGrid,
  setEvoultionRate,
  startEvolving,
  stopEvolving,
} from './slices/gridSlice';

let timer = null;

const timerMiddleware = store => next => action => {
  const { dispatch, getState } = store;
  let result = next(action);
  switch (action.type) {
    case startEvolving.type:
      const tmr = setInterval(
        () => dispatch(evolveGrid(getState().grid.grid)),
        getState().grid.evolutionRate,
      );
      timer = tmr;
      return tmr;

    case stopEvolving.type:
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      break;
    case evolveGrid.type:
      const { grid } = getState().grid;
      const current = result.payload;
      const isEqual = current.reduce((acc, row, rowIndex) => {
        return (
          acc &&
          row.reduce((acc, column, columnIndex) => {
            return (
              acc && column.isAlive === grid[rowIndex][columnIndex].isAlive
            );
          }, true)
        );
      }, true);
      if (isEqual) {
        dispatch(stopEvolving());
      }
      break;
    case setEvoultionRate.type:
      const { isEvolving } = getState().grid;
      const rate = action.payload;
      if (rate === 0) {
        dispatch(stopEvolving());
      } else if (isEvolving) {
        dispatch(stopEvolving());
        dispatch(startEvolving());
      }
      break;
    default:
  }
  return result;
};

export const store = configureStore({
  reducer: { grid: gridReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(timerMiddleware),
});
