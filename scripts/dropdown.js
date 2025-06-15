document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown-personalizado');
    const selected = dropdown.querySelector('.dropdown-selecionado');
    const selectedText = selected.querySelector('.dropdown-texto');
    const list = dropdown.querySelector('.lista-dropdown');
    const items = list.querySelectorAll('li');

    function fecharDropdown() {
        dropdown.classList.remove('open');
        selected.classList.remove('open');
    }

    selected.addEventListener('click', function () {
        dropdown.classList.toggle('open');
        selected.classList.toggle('open');
    });

    items.forEach(item => {
        item.addEventListener('click', function () {
            selectedText.textContent = this.textContent;
            fecharDropdown();
        });
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            fecharDropdown();
        }
    });

    selected.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            dropdown.classList.toggle('open');
            selected.classList.toggle('open');
        }
        if (e.key === 'Escape') {
            fecharDropdown();
        }
    });
});

function abrirJogo() {
    window.location.href = "pagina-jogo.html"; // Abre na mesma aba
}