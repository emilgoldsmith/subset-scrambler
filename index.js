import Cube from "cubejs";
import _ from "lodash";

document.getElementById("scramble-button").onclick = scramble;

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
  const numPieces = document.querySelector("#num-pieces").value;
  let possibleIndices = [];
  const possibleNumToFlip = [];
  for (let i = 0; i <= numPieces; i++) {
    if (i < numPieces) {
      possibleIndices.push(i);
    }
    if (i % 2 === 0) {
      possibleNumToFlip.push(i);
    }
  }
  let ep = [];
  for (let i = 0; i < 12; i++) {
    ep.push(i);
  }
  function doCycle() {
    const piecesToCycle = _.shuffle(possibleIndices).slice(0, 3);
    const [one, two, three] = piecesToCycle;
    const temp = ep[one];
    ep[one] = ep[two];
    ep[two] = ep[three];
    ep[three] = temp;
  }
  for (let i = 0; i < _.random(100, 999); i++) {
    doCycle();
  }
  console.log("ep", ep);
  console.log("initial possible indices", JSON.stringify(possibleIndices));
  console.log("possibleNumToFlip", possibleNumToFlip);
  possibleIndices = _.shuffle(possibleIndices);
  console.log("possibleIndices", JSON.stringify(possibleIndices));
  const numToFlip = _.sample(possibleNumToFlip);
  console.log("numToFlip", numToFlip);
  const eo = new Array(12).fill(0);
  console.log("initial eo", JSON.stringify(eo));
  for (const x of possibleIndices.slice(0, numToFlip)) {
    eo[x] = 1;
  }
  console.log("eo", JSON.stringify(eo));
  const cube = new Cube({
    ...solvedCube.toJSON(),
    ep,
    eo,
  });
  return cube;
}
