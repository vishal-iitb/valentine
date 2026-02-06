let noCount = 0;
let promiseIndex = 0;
const promises = [
  "I promise to respect you, always.",
  "I promise to listen to you.",
  "I promise to stand with you.",
  "I promise you, Bachaa, I’ll never make you feel alone."
];

function goTo(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'page-heartbeat') {
    document.getElementById('heartbeat').play();
  }
}

function noClicked() {
  noCount++;
  const yes = document.getElementById('yesBtn');
  yes.style.transform = `scale(${1 + noCount * 0.2})`;
  alert([
    "No Varsha… think again 😐",
    "Are you sure? 😑",
    "Please stop clicking NO 😭",
    "The website knows the answer 😏"
  ][Math.min(noCount - 1, 3)]);
}

function yesClicked() {
  alert("Finally 😌 Good choice, Varsha 🤍");
  goTo('page-letter');
}

function acceptPromise() {
  if (promiseIndex < promises.length) {
    document.getElementById('promiseText').innerText = promises[promiseIndex];
    promiseIndex++;
  } else {
    goTo('page-end');
  }
}

