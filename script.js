// Substitua pelos seus links do iCloud/Imgur (mínimo 15-30)
const photoList = [
    "https://i.postimg.cc/kXpw0qYT/IMG-6327.jpg",
    "https://i.postimg.cc/FKdKTgdd/C98EF96A-B278-4AAF-92AB-D9A73107C575.jpg",
    "https://i.postimg.cc/FKdKTgd7/ECFA4E70-3720-4737-8DC5-1F167108E8F2.jpg",
    "https://i.postimg.cc/k565TF6R/fqs-2026-01-16-200940-068.jpg",
    "https://i.postimg.cc/9fRfLtRD/IMG-5974.jpg"
    // Adicione as outras fotos aqui...
];

let targetDate = new Date('2026-08-01T00:00:00');
let currentIdx = 0;

// Slideshow Automático
function runSlideshow() {
    const img = document.getElementById('slide-img');
    if(photoList.length === 0) return;

    img.style.opacity = 0;
    setTimeout(() => {
        img.src = photoList[currentIdx];
        img.style.opacity = 1;
        currentIdx = (currentIdx + 1) % photoList.length;
    }, 800);
}

// Relógios BR e MY
function updateClocks() {
    const now = new Date();
    const br = now.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo', hour:'2-digit', minute:'2-digit'});
    const my = now.toLocaleTimeString('en-GB', {timeZone: 'Asia/Kuala_Lumpur', hour:'2-digit', minute:'2-digit'});
    
    document.getElementById('time-br').innerText = br;
    document.getElementById('time-my').innerText = my;
}

// Countdown
function updateCountdown() {
    const diff = targetDate - new Date();
    
    const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const m = Math.max(0, Math.floor((diff / 1000 / 60) % 60));
    const s = Math.max(0, Math.floor((diff / 1000) % 60));

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
}

// Senha e Configuração
function checkAdmin() {
    const pass = prompt("Digite a senha para alterar a data:");
    if (pass === "2222324") {
        const novaData = prompt("Digite a data (AAAA-MM-DD):", "2026-06-15");
        if (novaData) {
            targetDate = new Date(novaData + 'T00:00:00');
            alert("Data atualizada!");
        }
    } else {
        alert("Senha incorreta!");
    }
}

// Corações Flutuantes
function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

// Iniciar tudo
document.getElementById('slide-img').src = photoList[0];
setInterval(runSlideshow, 4000);
setInterval(updateClocks, 1000);
setInterval(updateCountdown, 1000);
setInterval(createHeart, 400);

updateClocks();
updateCountdown();
