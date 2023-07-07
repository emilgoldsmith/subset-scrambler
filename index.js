import Cube from "cubejs";
import _ from "lodash";

async function init() {
  Cube.initSolver();
  document.querySelector("#status").textContent = "Ready";
}

init();

document.getElementById("scramble-button").onclick = scramble;

console.log(Cube.random().toJSON());

async function scramble() {
  let cube = new Cube();
  while (cube.isSolved()) {
    console.log("Attempting scramble...");
    cube = await getScrambledCube();
  }
  document.getElementById("scramble-box").textContent = cube.solve(20);
}

async function getScrambledCube() {
  const solvedCube = new Cube();
  const numEdgePieces = document.getElementById("num-edge-pieces").value;
  const numCornerPieces = document.getElementById("num-corner-pieces").value;
  const includeParity = document.getElementById("include-parity").checked;
  const forceParity = document.getElementById("force-parity").checked;
  const randomParityYes = includeParity && _.random(0, 1) === 1;
  let ep = [];
  for (let i = 0; i < 12; i++) {
    ep.push(i);
  }
  const eo = new Array(12).fill(0);
  console.log("ep", JSON.stringify(ep));
  console.log("eo", JSON.stringify(eo));
  let cp = [];
  for (let i = 0; i < 8; i++) {
    cp.push(i);
  }
  const co = new Array(8).fill(0);
  console.log("cp", JSON.stringify(cp));
  console.log("co", JSON.stringify(co));
  if (randomParityYes || forceParity) {
    // Do a 2 swap on both edges and corners, the permutation and orientation
    // will be randomized later
    ep[0] = 1;
    ep[1] = 0;
    cp[0] = 1;
    cp[1] = 0;
  }
  if (numEdgePieces) {
    for (let i = 0; i < _.random(100, 999); i++) {
      cycleThreeEdges();
      flipTwoEdges();
    }
  }
  if (numCornerPieces) {
    for (let i = 0; i < _.random(100, 999); i++) {
      cycleThreeCorners();
      twistTwoCorners();
    }
  }
  console.log("ep", JSON.stringify(ep));
  console.log("eo", JSON.stringify(eo));
  console.log("cp", JSON.stringify(cp));
  console.log("co", JSON.stringify(co));
  const cube = new Cube({
    ...solvedCube.toJSON(),
    cp,
    co,
    ep,
    eo,
  });
  return cube;
  function cycleThreeEdges() {
    let firstIndex = 0;
    let secondIndex = 0;
    let thirdIndex = 0;
    while (_.uniq([firstIndex, secondIndex, thirdIndex]).length !== 3) {
      firstIndex = _.random(0, numEdgePieces - 1);
      secondIndex = _.random(0, numEdgePieces - 1);
      thirdIndex = _.random(0, numEdgePieces - 1);
    }
    const temp = ep[firstIndex];
    ep[firstIndex] = ep[secondIndex];
    ep[secondIndex] = ep[thirdIndex];
    ep[thirdIndex] = temp;
  }
  function flipTwoEdges() {
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex === secondIndex) {
      firstIndex = _.random(0, numEdgePieces - 1);
      secondIndex = _.random(0, numEdgePieces - 1);
    }
    flipEdgeIndex(firstIndex);
    flipEdgeIndex(secondIndex);
  }
  function flipEdgeIndex(index) {
    eo[index] = (eo[index] + 1) % 2;
  }
  function cycleThreeCorners() {
    let firstIndex = 0;
    let secondIndex = 0;
    let thirdIndex = 0;
    while (_.uniq([firstIndex, secondIndex, thirdIndex]).length !== 3) {
      firstIndex = _.random(0, numCornerPieces - 1);
      secondIndex = _.random(0, numCornerPieces - 1);
      thirdIndex = _.random(0, numCornerPieces - 1);
    }
    const temp = cp[firstIndex];
    cp[firstIndex] = cp[secondIndex];
    cp[secondIndex] = cp[thirdIndex];
    cp[thirdIndex] = temp;
  }
  function twistTwoCorners() {
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex === secondIndex) {
      firstIndex = _.random(0, numCornerPieces - 1);
      secondIndex = _.random(0, numCornerPieces - 1);
    }
    twistCornerClockwise(firstIndex);
    twistCornerCounterClockwise(secondIndex);
  }
  function twistCornerClockwise(index) {
    co[index] = (co[index] + 1) % 3;
  }
  function twistCornerCounterClockwise(index) {
    co[index] = (co[index] + 2) % 3;
  }
}
