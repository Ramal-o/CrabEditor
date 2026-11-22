

let x = 0;
let y = 0;

let cameraX = 0;
let cameraY = 0;
let cameraSpeed;
let isMouseDown = false;

export const camera = {x, y, cameraSpeed};
window.addEventListener('mousedown', (e) => {
  // e.button === 0 correspond au clic gauche
  if (e.button === 0) {
    isMouseDown = true;
    console.log("Clic maintenu commencé à :", e.clientX, e.clientY);
  }
});
window.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    console.log("Souris en mouvement avec clic maintenu -> X:", e.clientX, "Y:", e.clientY);
    // Ajoutez ici la logique souhaitée (ex: déplacer un élément, dessiner...)
  }
});
window.addEventListener('mouseup', () => {
  isMouseDown = false;
  console.log("Clic relâché.");
});