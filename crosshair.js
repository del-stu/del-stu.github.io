const Crosshair = (function () {
  const reticle = document.getElementById('reticle');
  const crosshairX = document.getElementById('crosshair-x');
  const crosshairY = document.getElementById('crosshair-y');

  function update(x, y) {
    reticle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    reticle.style.opacity = '1';
    crosshairX.style.transform = `translateY(${y}px)`;
    crosshairX.style.opacity = '1';
    crosshairY.style.transform = `translateX(${x}px)`;
    crosshairY.style.opacity = '1';
  }

  function hide() {
    reticle.style.opacity = '0';
    crosshairX.style.opacity = '0';
    crosshairY.style.opacity = '0';
  }

  function setVisible(visible) {
    const display = visible ? '' : 'none';
    reticle.style.display = display;
    crosshairX.style.display = display;
    crosshairY.style.display = display;
  }

  return {
    update,
    hide,
    setVisible,
  };
})();
