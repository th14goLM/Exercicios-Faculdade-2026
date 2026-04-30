// ================= TIMER =================
// Define a data do lançamento (em milissegundos)
const launchDate = new Date("Dec 31, 2026 23:59:59").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Converte a diferença para dias
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
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