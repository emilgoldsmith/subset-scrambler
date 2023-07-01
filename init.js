import Cube from "cubejs";

async function init() {
  Cube.initSolver();
  document.querySelector("#status").textContent = "Ready";
}

init();
