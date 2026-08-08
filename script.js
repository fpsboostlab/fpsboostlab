// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mainnav');
  if (burger && nav){
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Animated FPS readout on the homepage HUD panel
  const fpsEl = document.querySelector('[data-fps-count]');
  if (fpsEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const target = parseInt(fpsEl.getAttribute('data-fps-count'), 10);
    const start = 118;
    const duration = 1600;
    const startTime = performance.now();
    function tick(now){
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(start + (target - start) * eased);
      fpsEl.textContent = val;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
});
