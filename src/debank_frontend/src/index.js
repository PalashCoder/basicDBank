import { debank_backend } from "../../declarations/debank_backend"

window.addEventListener("load", async function () {
  update();
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  const button = event.target.querySelector("#submit-btn");

  const inputAmmount = document.getElementById("input-amount").value;
  const withdrawAmmount = document.getElementById("withdrawal-amount").value;

  button.setAttribute("disablr", true);
  if (document.getElementById("input-amount").value.length != 0) {
    await debank_backend.add(inputAmmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await debank_backend.withDraw(withdrawAmmount);
  }

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disable");
});

async function update() {
  const ballance = await debank_backend.checkBallance();
  this.document.getElementById("value").innerText = ballance;
};