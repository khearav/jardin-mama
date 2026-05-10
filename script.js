const startBtn = document.getElementById('startBtn');
const music = document.getElementById('music');
const hero = document.querySelector('.hero');
const garden = document.querySelector('.garden');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');

startBtn.onclick = async () => {
  hero.classList.add('hidden');
  garden.classList.remove('hidden');
  try { await music.play(); } catch(e) {}
};

document.querySelectorAll('.flower').forEach(f=>{
  f.onclick=()=>{
    modal.classList.remove('hidden');
    modalText.textContent = f.dataset.msg;
  };
});

modal.onclick=()=>modal.classList.add('hidden');

window.addEventListener('deviceorientation', e=>{
  const x = (e.gamma || 0) / 45;
  const y = (e.beta || 0) / 90;
  document.body.style.backgroundPosition = `${50+x*8}% ${50+y*8}%`;
});
