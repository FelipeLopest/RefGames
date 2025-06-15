document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.custom-dropdown');
    const selected = dropdown.querySelector('.dropdown-selected');
    const list = dropdown.querySelector('.dropdown-list');
    const items = list.querySelectorAll('li');

    function closeDropdown() {
        dropdown.classList.remove('open');
        selected.classList.remove('open');
    }

    selected.addEventListener('click', function () {
        dropdown.classList.toggle('open');
        selected.classList.toggle('open');
    });

    items.forEach(item => {
        item.addEventListener('click', function () {
            selected.textContent = this.textContent; // Troca só o texto!
            closeDropdown();
        });
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    selected.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            dropdown.classList.toggle('open');
            selected.classList.toggle('open');
        }
        if (e.key === 'Escape') {
            closeDropdown();
        }
    });
});