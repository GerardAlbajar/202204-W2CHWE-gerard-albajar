const height = 3;
const width = 3;
class Square {
  positionX;
  positionY;
  alive = false;
  id;

  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.id = `#${positionX}P${positionY}`;
  }
}

const bothPositions = [];
const generatePositionInformation = () => {
  for (let y = 0; y <= height; y++) {
    for (let x = 0; x <= width; x++) {
      bothPositions.push(new Square(x, y));
    }
  }
  return bothPositions;
};

generatePositionInformation();
