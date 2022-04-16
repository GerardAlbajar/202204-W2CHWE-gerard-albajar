const colum = 3;
const row = 3;
const squareInformation = [];
const iAmNotDead = [];
const iamNotAlive = [];

class Square {
  positionX;
  positionY;
  alive = true;
  id;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }
}

const generatePositionInformation = () => {
  for (let y = 0; y < colum; y++) {
    for (let x = 0; x < row; x++) {
      squareInformation.push(new Square(x, y));
    }
  }
  for (let i = 0; i < squareInformation.length; i++) {
    squareInformation[i].id = i + 1;
  }
  return squareInformation;
};

generatePositionInformation();

// const iAmAlive = () => {
//   for (let i = 0; i < iAmNotDead.length; i++) {
//     if (iAmNotDead[i]) {
//     }
//   }
// };

// const iAmDead = () => {
//   for (let i = 0; i < iamNotAlive.length; i++) {
//     if (iamNotAlive[i]) {
//     }
//   }
// };

const checkingStatus = () => {
  for (let i = 0; i < squareInformation.length; i++) {
    if (squareInformation[i].alive === true) {
      iAmNotDead.push(squareInformation[i].id);
    }
    iamNotAlive.push(squareInformation[i].id);
  }
};

checkingStatus();

const checkingNeighbours = () => {
  for (let i = 0; i < squareInformation.length; i++) {
    squareInformation[i].upperId = i + colum;
    squareInformation[i].underId = i - colum;
    squareInformation[i].rightId = i + 1;
    squareInformation[i].leftId = i - 1;
    squareInformation[i].upRightCornerId = i + colum + 1;
    squareInformation[i].upLeftCornerId = i + colum - 1;
    squareInformation[i].underRightCornerId = i - colum + 1;
    squareInformation[i].underLeftCornerId = i - colum - 1;
  }
};

checkingNeighbours();
