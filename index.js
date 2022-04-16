const colum = 3;
const row = 3;
class Square {
  positionX;
  positionY;
  alive = false;
  id;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }
}

const squareInformation = [];
const generatePositionInformation = () => {
  for (let y = 0; y < colum; y++) {
    for (let x = 0; x < row; x++) {
      if (y < 10) squareInformation.push(new Square(x, y));
    }
  }
  for (let i = 0; i < squareInformation.length; i++) {
    squareInformation[i].id = i + 1;
  }
};

generatePositionInformation();
