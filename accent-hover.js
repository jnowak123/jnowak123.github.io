
document.querySelectorAll('.accent').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.color = getComputedStyle(document.documentElement)
                      .getPropertyValue('--second-accent-color');
  });
  el.addEventListener('mouseleave', () => {
    el.style.color = getComputedStyle(document.documentElement)
                      .getPropertyValue('--accent-color');
  });
});
