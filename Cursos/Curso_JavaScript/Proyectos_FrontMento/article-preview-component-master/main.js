const shareBtn = document.getElementById('share-btn');
const socialPanel = document.getElementById('social-panel');

shareBtn.addEventListener('click', () => {
  // 1. Mostrar/Ocultar el panel
  socialPanel.classList.toggle('hidden');
  
  // 2. Cambiar el estilo del botón (oscuro/claro)
  shareBtn.classList.toggle('active');
});