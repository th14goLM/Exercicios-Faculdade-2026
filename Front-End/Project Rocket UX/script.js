// ================= TEMPORIZADOR =================
// Define a data do lançamento (em milissegundos)
// ================= TEMPORIZADOR =================
const launchDate = new Date("Dec 31, 2026 23:59:59").getTime();

const timerInterval = setInterval(() => {
    const distance = launchDate - Date.now();

    if (distance <= 0) {
        clearInterval(timerInterval);
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText   = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText  = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

}, 1000);

// ================= MODAL =================
// Objeto com dados dos tripulantes (simula um banco de dados)
const crewData = {
    "Reid Wiseman": "Comandante da missão e veterano da Marinha dos EUA.",
    "Christina Koch": "Engenheira eletricista com recorde de permanência no espaço.",
    "Jeremy Hansen": "Coronel das Forças Armadas Canadenses e especialista de missão.",
    "Victor Glover": "Piloto da Marinha e segunda missão oficial ao espaço."
};

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("crew-modal");
const closeBtn = document.querySelector(".close-button");

// Para cada card de tripulante
document.querySelectorAll(".tripulante-card").forEach(card => {

    card.onclick = () => {
        const name = card.querySelector("h3").innerText;
        document.getElementById("modal-name").innerText = name;
        document.getElementById("modal-bio").innerText = crewData[name];
        modal.style.display = "block";
    };
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if(e.target === modal) modal.style.display = "none";
};

// ================= REVEl =================

const observerOptions = {
    threshold: 0.15 // O elemento aparece quando 15% dele estiver visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// ================= API DA NASA (APOD) =================

async function getNASAData() {
    const apiKey = '9xK5ydXDIwkKjfpaoTWL5xe1oKZz43gBW1bXWaHi';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        const data = await response.json();
        exibirAPOD(data);
    } catch (error) {
        console.error('Erro na missão:', error);
        document.getElementById('apod-loading').innerText =
            "Houve um erro na transmissão de dados da NASA.";
    }
}

function exibirAPOD(data) {
    const loading = document.getElementById("apod-loading");
    const img     = document.getElementById("apod-img");
    const iframe  = document.getElementById("apod-iframe");
    const content = document.getElementById("apod-content");

    document.getElementById("apod-title").textContent       = data.title;
    document.getElementById("apod-explanation").textContent = data.explanation;

    if (data.media_type === "video") {
        const isYouTube = data.url.includes("youtube.com") || data.url.includes("youtu.be");
        const mediaEl = document.createElement(isYouTube ? "iframe" : "video");

        mediaEl.src         = data.url;
        mediaEl.style.cssText = "width:100%; height:450px; border:none; border-radius:15px; display:block;";

        if (isYouTube) mediaEl.allowFullscreen = true;
        else           mediaEl.controls = true;

        // Insere após o <img> sem depender do iframe no HTML
        img.insertAdjacentElement("afterend", mediaEl);
    } else {
        img.src           = data.hdurl ?? data.url;
        img.style.display = "block";
    }

    loading.style.display = "none";
    content.style.display = "block";
}
getNASAData();
