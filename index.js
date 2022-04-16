const column = 3;
const row = 3;
const grid = [];
const iAmNotDead = [];
const iamNotAlive = [];

const generatePositionInformation = () => {
  for (let y = 0; y < column; y++) {
    for (let x = 0; x < row; x++) {
      grid.push({
        x,
        y,
        alive: false,
      });
    }
  }
  return grid;
};

generatePositionInformation();

const checkingStatus = () => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].alive === true) {
      iAmNotDead.push(grid[i]);
    }
    iamNotAlive.push(grid[i]);
  }
};

checkingStatus();

const checkingNeighbours = () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].idx = i;
    grid[i].topIdx = i + column;
    grid[i].bottomIdx = i - column;
    grid[i].rightIdx = i + 1;
    grid[i].leftIdx = i - 1;
    grid[i].topRightIdx = i + column + 1;
    grid[i].topLeftIdx = i + column - 1;
    grid[i].bottomRightIdx = i - column + 1;
    grid[i].bottomLeftIdx = i - column - 1;
  }
};

checkingNeighbours();

const checkIsAlive = (cell) => {
  let neighboursAliveCount = 0;
  if (grid[cell.topLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.topIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.topRightIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.leftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.rightIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomRightIdx].alive) {
    neighboursAliveCount++;
  }

  if (neighboursAliveCount > 2) {
    return true;
  }
  return false;
};

const updateAlive = () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].alive = checkIsAlive(grid[i]);
  }
};

updateAlive();
