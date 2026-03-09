// Interactive ripple on glass components
document.querySelectorAll('.glass, .btn-primary, .btn-upgrade, .icon-btn').forEach(el => {
  el.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
      width: '120px', height: '120px',
      left: (x - 60) + 'px', top: (y - 60) + 'px',
      transform: 'scale(0)',
      pointerEvents: 'none',
      zIndex: '10',
      animation: 'ripple 0.55s ease-out forwards'
    });
    this.style.position = this.style.position || 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

const style = document.createElement('style');
style.textContent = '@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }';
document.head.appendChild(style);

// Parallax ambient blobs on mouse move
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  document.body.style.backgroundPosition = `${50 + x * 0.3}% ${50 + y * 0.3}%`;
});