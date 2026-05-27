const el = {
  yesBtn: document.getElementById('btn-si'),
  noBtn: document.getElementById('btn-no'),
  validate: document.querySelector('.btn-validate'),
  mathForm: document.getElementById('math-form'),
  proposal: document.getElementById('screen-propuesta'),
  title: document.querySelector('.proposal-title'),
  victory: document.getElementById('screen-victoria'),
  mathProblem: document.getElementById('screen-math'),
  answer: document.getElementById('math-answer'),
  heartBroken: document.querySelector('.view-heartbreak'),
  hellNah: new Audio('./sounds/omg-hellNah.mp3'),
  wowAnime: new Audio('./sounds/anime-wow.mp3'),
  errorSound: new Audio('./sounds/error-sound.mp3'),
  black: new Audio('./sounds/black-pearlJam.mp3'),
};

const saidYes = function () {
  el.proposal.classList.add('hidden');
  el.victory.classList.remove('hidden');
  el.wowAnime.play();
};

const saidNo = function () {
  el.proposal.classList.add('hidden');
  el.mathProblem.classList.remove('hidden');
};

let noCount = 10;
const validateAnswer = function (e) {
  e.preventDefault();
  const correctAnswer = 17;
  let answer = Number(el.answer.value);
  if (answer === correctAnswer) {
    el.proposal.classList.add('hidden');
    el.mathProblem.classList.add('hidden');
    el.heartBroken.classList.remove('hidden');
    el.black.play();
  } else {
    noCount += 20;
    el.mathProblem.classList.add('hidden');
    el.proposal.classList.remove('hidden');
    el.answer.value = '';
    el.yesBtn.style.fontSize = `${10 + noCount}px`;
    if (noCount <= 30) {
      el.title.textContent = 'Respuesta Incorrecta😭';
      el.errorSound.play();
    } else if (noCount <= 50) {
      el.title.textContent = 'Ya miraste que hay un boton que dice SI?😉';
      el.errorSound.play();
    } else if (noCount <= 70) {
      el.title.textContent =
        'Pista: La respuesta correcta esta en el boton que dice SI🤫';
      el.errorSound.play();
    } else if (noCount > 70) {
      el.title.textContent = 'Ya dale que SI... 😩';
      el.hellNah.play();
    }
  }
};

el.yesBtn.addEventListener('click', saidYes);
el.noBtn.addEventListener('click', saidNo);
el.mathForm.addEventListener('submit', validateAnswer);
