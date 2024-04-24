const defaultRows = 40;
const defaultColumns = 40;

export const emptyGrid = () => {
  const grid = [];
  for (let i = 0; i < defaultRows; i++) {
    grid[i] = [];
    for (let j = 0; j < defaultColumns; j++) {
      grid[i][j] = { isAlive: false };
    }
  }
  return grid;
};

export const presetGrids = {
  glider: 'Glider',
  dieHard: 'Die Hard',
  lwSpaceship: 'Lightweight Spaceship',
};

function addLocation(grid, row, column) {
  grid[row][column].isAlive = true;
}

export function loadGlider() {
  const grid = emptyGrid();
  if (grid.length < 10) {
    throw new Error('Grid is not large enough!');
  }
  addLocation(grid, 8, 8);
  addLocation(grid, 9, 8);
  addLocation(grid, 10, 8);
  addLocation(grid, 8, 9);
  addLocation(grid, 9, 10);
  return grid;
}

export function loadDieHard() {
  const grid = emptyGrid();
  if (grid.length < 13) {
    throw new Error('Grid is not large enough!');
  }
  addLocation(grid, 9, 12);
  addLocation(grid, 10, 6);
  addLocation(grid, 10, 7);
  addLocation(grid, 11, 7);
  addLocation(grid, 11, 11);
  addLocation(grid, 11, 12);
  addLocation(grid, 11, 13);
  return grid;
}

export function loadLWSpaceship() {
  const grid = emptyGrid();
  if (grid.length < 13) {
    throw new Error('Grid is not large enough!');
  }
  addLocation(grid, 9, 8);
  addLocation(grid, 12, 8);
  addLocation(grid, 8, 9);
  addLocation(grid, 8, 10);
  addLocation(grid, 12, 10);
  addLocation(grid, 8, 11);
  addLocation(grid, 9, 11);
  addLocation(grid, 10, 11);
  addLocation(grid, 11, 11);
  return grid;
}
