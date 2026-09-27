(function () {
  const TOTAL = 4;
  const form = document.getElementById('survey');
  const label = document.getElementById('step-label');
  const bar = document.getElementById('progress-bar');
  const error = document.getElementById('form-error');
  const answers = {};

  document.getElementById('year').textContent = new Date().getFullYear();

  function show(step, focus = true) {
    form.querySelectorAll('.step').forEach((el) => {
      el.classList.toggle('active', el.dataset.step === String(step));
    });
    const n = typeof step === 'number' ? step : TOTAL;
    label.textContent = typeof step === 'number' ? `STEP ${n} OF ${TOTAL}` : 'COMPLETE';
    bar.style.width = typeof step === 'number' ? `${((n - 1) / TOTAL) * 100}%` : '100%';
    const first = form.querySelector('.step.active .option, .step.active input');
    if (focus && first) first.focus({ preventScroll: true });
  }

  form.addEventListener('click', (e) => {
    const option = e.target.closest('.option');
    if (option) {
      const fieldset = option.closest('.step');
      fieldset.querySelectorAll('.option').forEach((o) => o.classList.remove('selected'));
      option.classList.add('selected');
      answers[option.dataset.name] = option.dataset.value;

      const current = Number(fieldset.dataset.step);
      if (current === 1 && option.dataset.value === 'No') {
        setTimeout(() => show('ineligible'), 150);
      } else {
        setTimeout(() => show(current + 1), 150);
      }
      return;
    }

    const back = e.target.closest('.back');
    if (back) {
      if (back.hasAttribute('data-restart')) {
        form.querySelectorAll('.option.selected').forEach((o) => o.classList.remove('selected'));
        show(1);
      } else {
        show(Number(back.closest('.step').dataset.step) - 1);
      }
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('[data-step="4"] input');
    const valid = Array.from(inputs).every((i) => i.value.trim() && i.checkValidity());
    error.hidden = valid;
    if (!valid) return;

    inputs.forEach((i) => { answers[i.name] = i.value.trim(); });

    // Hook up your CRM / webhook here, e.g.:
    // fetch('https://your-webhook-url', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(answers) });
    console.log('Survey submission', answers);

    show('done');
  });

  show(1, false);
})();
