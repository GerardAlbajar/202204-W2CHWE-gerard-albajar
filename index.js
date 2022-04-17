const columns = 20;
const rows = 20;
const grid = [];

const generateGrid = () => {
  for (let y = 0; y < columns; y++) {
    for (let x = 0; x < rows; x++) {
      grid.push({
        x,
        y,
        alive: false,
      });
    }
  }
  return grid;
};

generateGrid();

const checkingNeighbours = () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].idx = i;
    grid[i].topIdx = i - columns;
    grid[i].bottomIdx = i + columns;
    grid[i].rightIdx = i + 1;
    grid[i].leftIdx = i - 1;
    grid[i].topRightIdx = i - columns + 1;
    grid[i].topLeftIdx = i - columns - 1;
    grid[i].bottomRightIdx = i + columns + 1;
    grid[i].bottomLeftIdx = i + columns - 1;
  }
};

checkingNeighbours();

const checkIsAlive = (cell) => {
  let neighboursAliveCount = 0;
  if (grid[cell.topLeftIdx] && grid[cell.topLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.topIdx] && grid[cell.topIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.topRightIdx] && grid[cell.topRightIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.leftIdx] && grid[cell.leftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.rightIdx] && grid[cell.rightIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomLeftIdx] && grid[cell.bottomLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomIdx] && grid[cell.bottomIdx].alive) {
    neighboursAliveCount++;
  }
  if (grid[cell.bottomRightIdx] && grid[cell.bottomRightIdx].alive) {
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

// eslint-disable-next-line no-unused-vars
const startGame = () => {
  updateAlive();
};

const selectCell = (cell) => {
  const myCell = cell.path[0];
  const idCell = Number(myCell.id);
  myCell.classList.add("selected");
  grid[idCell].alive = true;
};

function renderGrid() {
  const mainContainer = document.getElementById("grid-container");
  for (let i = 0; i < rows; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < columns; j++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("cell");
      newColumn.onclick = selectCell;
      newRow.appendChild(newColumn);
    }
    mainContainer.appendChild(newRow);
  }
}

renderGrid();
