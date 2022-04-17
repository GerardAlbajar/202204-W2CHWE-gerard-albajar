const columns = 30;
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
    grid[i].topIdx = i + columns;
    grid[i].bottomIdx = i - columns;
    grid[i].rightIdx = i + 1;
    grid[i].leftIdx = i - 1;
    grid[i].topRightIdx = i + columns + 1;
    grid[i].topLeftIdx = i + columns - 1;
    grid[i].bottomRightIdx = i - columns + 1;
    grid[i].bottomLeftIdx = i - columns - 1;
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

function renderGrid() {
  const mainContainer = document.getElementById("grid-container");
  let index = 0;
  for (let i = 0; i < rows; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < columns; j++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("cell");
      newColumn.id = `${index}`;
      newRow.appendChild(newColumn);
      index++;
    }
    mainContainer.appendChild(newRow);
  }
}

renderGrid();
