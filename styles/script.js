document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById('game-frame');
    const aviso = document.getElementById('aviso');
    const btnFull = document.getElementById('btn-full');
    const btnSound = document.getElementById('btn-sound');

    btnFull.addEventListener('click', () => {
        if (iframe.requestFullscreen) iframe.requestFullscreen();
        else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
        else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
        else alert("Seu navegador não suporta tela cheia.");

        aviso.style.display = "block";
        setTimeout(() => {
            aviso.style.display = "none";
        }, 3000);
    });

    btnSound.addEventListener('click', () => {
        alert("Este botão simula o som. Controle de som real depende do jogo.");
    });
});

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const itensMenu = document.querySelectorAll('.dropdown-menu a');
const textoCategoria = document.getElementById('texto-categoria');
const iconCategoria = document.getElementById('icon-categoria');

dropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

itensMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const categoria = item.getAttribute('data-categoria');
        const icone = item.querySelector('i').cloneNode(true);
        textoCategoria.textContent = categoria;
        iconCategoria.innerHTML = '';
        iconCategoria.appendChild(icone);
        dropdownMenu.classList.remove('show');
    });
});