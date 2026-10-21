const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const resultEl = document.getElementById('result');
const solveBtn = document.getElementById('solveBtn');
const resetBtn = document.getElementById('resetBtn');

function solve() {
  const rawX = xInput.value.trim();
  const rawY = yInput.value.trim();

  if (rawX === '' || rawY === '') {
    resultEl.textContent = 'Введите оба значения X и Y.';
    return;
  }

  const X = Number(rawX);
  const Y = Number(rawY);

  if (!Number.isFinite(X) || !Number.isFinite(Y)) {
    resultEl.textContent = 'Введены некорректные числа.';
    return;
  }

  if (X === 0 || Y === 0) {
    resultEl.textContent =
      'Деление на ноль: X = ' + X + ', Y = ' + Y + ', Z не существует.';
    return;
  }

  const Z = 1 / (X * Y);
  const formattedZ = Number(Z.toFixed(6)).toString();

  resultEl.textContent =
    'X = ' + X + ', Y = ' + Y + ', Z = 1 / (X · Y) = ' + formattedZ;
}

function reset() {
  xInput.value = '';
  yInput.value = '';
  resultEl.textContent = '';
  xInput.focus();
}

solveBtn.addEventListener('click', solve);
resetBtn.addEventListener('click', reset);

[xInput, yInput].forEach(function (inp) {
  inp.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') solve();
  });
});