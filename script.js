(function () {
  // Line icons: `fill` is the offset soft highlight, `stroke` is the line art (colours set in styles.css).
  const ICONS = {
    scale: {
      fill: '<rect x="18" y="22" width="60" height="56" rx="10"/>',
      stroke: '<rect x="18" y="22" width="60" height="56" rx="10"/><path d="M34 44 A14 14 0 0 1 62 44 Z"/><path d="M48 44 L54 34"/><path d="M28 78 v5 M68 78 v5"/>',
    },
    bolt: {
      fill: '<path d="M56 14 L28 54 H48 L42 86 L72 42 H52 Z"/>',
      stroke: '<path d="M56 14 L28 54 H48 L42 86 L72 42 H52 Z"/>',
    },
    molecule: {
      fill: '<circle cx="50" cy="28" r="11"/><circle cx="74" cy="68" r="11"/>',
      stroke: '<circle cx="50" cy="28" r="11"/><circle cx="26" cy="68" r="11"/><circle cx="74" cy="68" r="11"/><path d="M44 38 L32 58 M56 38 L68 58 M37 68 H63"/>',
    },
    dumbbell: {
      fill: '<rect x="18" y="32" width="12" height="36" rx="3"/><rect x="70" y="32" width="12" height="36" rx="3"/>',
      stroke: '<path d="M30 50 H70"/><rect x="18" y="32" width="12" height="36" rx="3"/><rect x="70" y="32" width="12" height="36" rx="3"/><rect x="9" y="40" width="9" height="20" rx="2"/><rect x="82" y="40" width="9" height="20" rx="2"/>',
    },
    heart: {
      fill: '<path d="M50 82 C20 62 12 46 20 32 C28 18 46 20 50 34 C54 20 72 18 80 32 C88 46 80 62 50 82 Z"/>',
      stroke: '<path d="M50 82 C20 62 12 46 20 32 C28 18 46 20 50 34 C54 20 72 18 80 32 C88 46 80 62 50 82 Z"/><path d="M30 38 C31 33 34 30 38 29"/>',
    },
    sprout: {
      fill: '<path d="M50 48 C50 30 62 18 80 18 C80 36 68 48 50 48 Z"/>',
      stroke: '<path d="M50 86 V46"/><path d="M50 60 C34 60 22 50 22 34 C38 34 50 44 50 60 Z"/><path d="M50 48 C50 30 62 18 80 18 C80 36 68 48 50 48 Z"/><path d="M32 86 H68"/>',
    },
    smile: {
      fill: '<circle cx="46" cy="54" r="28"/>',
      stroke: '<circle cx="46" cy="54" r="28"/><path d="M36 47 v3 M56 47 v3"/><path d="M34 62 Q46 74 58 62"/><path d="M82 10 V28 M73 19 H91"/>',
    },
    sun: {
      fill: '<circle cx="50" cy="50" r="17"/>',
      stroke: '<circle cx="50" cy="50" r="17"/><path d="M50 14 V24 M50 76 V86 M14 50 H24 M76 50 H86 M25 25 L32 32 M68 68 L75 75 M25 75 L32 68 M68 32 L75 25"/>',
    },
    stopwatch: {
      fill: '<circle cx="50" cy="56" r="28"/>',
      stroke: '<circle cx="50" cy="56" r="28"/><path d="M42 16 H58 M50 16 V28"/><path d="M50 56 L61 43"/><path d="M73 30 L79 24"/><path d="M50 36 v4 M70 56 h-4 M50 76 v-4 M30 56 h4"/>',
    },
    pulse: {
      fill: '<path d="M50 82 C20 62 12 46 20 32 C28 18 46 20 50 34 C54 20 72 18 80 32 C88 46 80 62 50 82 Z"/>',
      stroke: '<path d="M50 82 C20 62 12 46 20 32 C28 18 46 20 50 34 C54 20 72 18 80 32 C88 46 80 62 50 82 Z"/><path d="M8 52 H34 L40 42 L48 62 L55 48 L60 52 H92"/>',
    },
    shield: {
      fill: '<path d="M50 12 L80 23 V47 C80 66 68 78 50 88 C32 78 20 66 20 47 V23 Z"/>',
      stroke: '<path d="M50 12 L80 23 V47 C80 66 68 78 50 88 C32 78 20 66 20 47 V23 Z"/><path d="M36 50 L46 60 L65 40"/>',
    },
    stethoscope: {
      fill: '<circle cx="76" cy="52" r="10"/>',
      stroke: '<path d="M28 14 V36 C28 50 36 58 46 58 C56 58 64 50 64 36 V14"/><path d="M23 14 H33 M59 14 H69"/><path d="M46 58 V70 C46 80 54 86 62 86 C70 86 76 80 76 72 V62"/><circle cx="76" cy="52" r="10"/><circle cx="76" cy="52" r="3"/>',
    },
    chat: {
      fill: '<path d="M16 18 H58 A6 6 0 0 1 64 24 V48 A6 6 0 0 1 58 54 H32 L22 64 V54 H16 A6 6 0 0 1 10 48 V24 A6 6 0 0 1 16 18 Z"/>',
      stroke: '<path d="M16 18 H58 A6 6 0 0 1 64 24 V48 A6 6 0 0 1 58 54 H32 L22 64 V54 H16 A6 6 0 0 1 10 48 V24 A6 6 0 0 1 16 18 Z"/><path d="M72 38 H84 A6 6 0 0 1 90 44 V68 A6 6 0 0 1 84 74 H80 V84 L70 74 H48 A6 6 0 0 1 42 68 V62"/><path d="M26 36 h.01 M37 36 h.01 M48 36 h.01" stroke-width="6"/>',
    },
    bulb: {
      fill: '<path d="M50 12 C34 12 24 24 24 38 C24 50 32 56 36 66 H64 C68 56 76 50 76 38 C76 24 66 12 50 12 Z"/>',
      stroke: '<path d="M50 12 C34 12 24 24 24 38 C24 50 32 56 36 66 H64 C68 56 76 50 76 38 C76 24 66 12 50 12 Z"/><path d="M38 74 H62 M41 82 H59"/><path d="M43 52 L50 42 L57 52"/>',
    },
  };

  const QUESTIONS = [
    {
      name: 'improve',
      title: 'What would you most like to <strong>improve right now?</strong>',
      options: [
        ['Lose weight & feel more confident', 'scale'],
        ['Improve energy & metabolism', 'bolt'],
        ['Optimise hormones', 'molecule'],
        ['Build muscle & recover faster', 'dumbbell'],
        ['Improve sexual health & libido', 'heart'],
        ['Healthy ageing & overall wellbeing', 'sprout'],
      ],
    },
    {
      name: 'result',
      title: 'What result would make the <strong>biggest difference</strong> to you?',
      options: [
        ['Look and feel better', 'smile'],
        ['Have more energy every day', 'sun'],
        ['Improve my performance & recovery', 'stopwatch'],
        ['Get my health back on track', 'pulse'],
        ['Optimise my long-term health', 'shield'],
      ],
    },
    {
      name: 'approach',
      title: 'How would you prefer to <strong>approach it?</strong>',
      options: [
        ['Explore clinician-supervised treatment options', 'stethoscope'],
        ['Get professional advice on my options', 'chat'],
        ["I’m not sure yet — I’d like to learn more", 'bulb'],
      ],
    },
  ];

  const TOTAL = QUESTIONS.length;
  const container = document.getElementById('questions');
  const leadForm = document.getElementById('lead-form');
  const label = document.getElementById('step-label');
  const bar = document.getElementById('progress-bar');
  const error = document.getElementById('form-error');
  const answers = {};

  document.getElementById('year').textContent = new Date().getFullYear();

  function icon(key) {
    const { fill, stroke } = ICONS[key];
    return `<svg viewBox="0 0 100 100" aria-hidden="true">
      <g class="ic-fill" transform="translate(4 4)">${fill}</g>
      <g class="ic-line">${stroke}</g>
    </svg>`;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  container.innerHTML = QUESTIONS.map((q, i) => `
    <div class="step" data-step="${i + 1}">
      <h2>${q.title}</h2>
      <p class="hint">Select your best option.</p>
      <div class="options" role="group">
        ${q.options.map(([text, key]) => `
          <button type="button" class="option" data-name="${q.name}" data-value="${escapeHtml(text)}" aria-pressed="false">
            ${icon(key)}<span>${escapeHtml(text)}</span>
          </button>`).join('')}
      </div>
      <button type="button" class="next" data-continue disabled>Continue &rarr;</button>
      ${i > 0 ? '<button type="button" class="back">&larr; Back</button>' : ''}
    </div>`).join('');

  const steps = document.querySelectorAll('.quiz .step');
  const order = [...QUESTIONS.map((_, i) => String(i + 1)), 'contact', 'done'];
  let current = 0;

  function show(index) {
    current = index;
    const key = order[index];
    steps.forEach((el) => el.classList.toggle('active', el.dataset.step === key));

    if (index < TOTAL) {
      label.textContent = `QUESTION ${index + 1} OF ${TOTAL}`;
      bar.style.width = `${(index / TOTAL) * 100}%`;
    } else {
      label.textContent = key === 'done' ? 'COMPLETE' : 'LAST STEP';
      bar.style.width = key === 'done' ? '100%' : '90%';
    }
  }

  document.querySelector('.quiz').addEventListener('click', (e) => {
    const option = e.target.closest('.option');
    if (option) {
      const step = option.closest('.step');
      step.querySelectorAll('.option').forEach((o) => o.setAttribute('aria-pressed', 'false'));
      option.setAttribute('aria-pressed', 'true');
      answers[option.dataset.name] = option.dataset.value;
      step.querySelector('[data-continue]').disabled = false;
      return;
    }

    if (e.target.closest('[data-continue]')) {
      show(current + 1);
      document.querySelector('.quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (e.target.closest('.back')) show(current - 1);
  });

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = leadForm.querySelectorAll('input');
    const valid = Array.from(inputs).every((i) => i.value.trim() && i.checkValidity());
    error.hidden = valid;
    if (!valid) return;

    inputs.forEach((i) => { answers[i.name] = i.value.trim(); });

    // Hook up your CRM / webhook here, e.g.:
    // fetch('https://your-webhook-url', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(answers) });
    console.log('Survey submission', answers);

    show(order.indexOf('done'));
  });

  show(0);
})();
