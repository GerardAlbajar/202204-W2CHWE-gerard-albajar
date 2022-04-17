const columns = 20;
const rows = 20;
const grid = [];

const generateGrid = () => {
  for (let y = 0; y < columns; y++) {
    for (let x = 0; x < rows; x++) {
      grid.push({ alive: false });
    }
  }
  return grid;
};

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

const checkIsAlive = (oldGrid, cell) => {
  let neighboursAliveCount = 0;
  if (oldGrid[cell.topLeftIdx] && oldGrid[cell.topLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.topIdx] && oldGrid[cell.topIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.topRightIdx] && oldGrid[cell.topRightIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.leftIdx] && oldGrid[cell.leftIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.rightIdx] && oldGrid[cell.rightIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.bottomLeftIdx] && oldGrid[cell.bottomLeftIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.bottomIdx] && oldGrid[cell.bottomIdx].alive) {
    neighboursAliveCount++;
  }
  if (oldGrid[cell.bottomRightIdx] && oldGrid[cell.bottomRightIdx].alive) {
    neighboursAliveCount++;
  }

  if (cell.alive && neighboursAliveCount > 1 && neighboursAliveCount < 4) {
    return true;
  }
  if (!cell.alive && neighboursAliveCount === 3) {
    return true;
  }
  return false;
};

const updateHtml = () => {
  for (let i = 0; i < grid.length; i++) {
    const cell = document.getElementById(i.toString());
    if (grid[i].alive) {
      cell.classList.add("selected");
    } else {
      cell.classList.remove("selected");
    }
  }
};

const updateAlive = () => {
  const gridCopy = grid.slice();
  for (let i = 0; i < grid.length; i++) {
    grid[i] = {
      ...grid[i],
      alive: checkIsAlive(gridCopy, grid[i]),
    };
  }
  updateHtml();
};

// eslint-disable-next-line no-unused-vars
const startGame = () => {
  setInterval(() => {
    updateAlive();
  }, 1000);
};

const selectCellByClick = (cellHtml) => {
  const myCell = cellHtml.currentTarget;
  const idCell = Number(myCell.id);
  myCell.classList.add("selected");
  grid[idCell].alive = true;
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
      newColumn.onclick = selectCellByClick;
      newRow.appendChild(newColumn);
      index++;
    }
    mainContainer.appendChild(newRow);
  }
}

generateGrid();
checkingNeighbours();

renderGrid();
