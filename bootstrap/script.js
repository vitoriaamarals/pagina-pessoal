const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    // 1. Pega o tema atual
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    // 2. Define o novo tema e o novo ícone
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        // Troca para o sol quando o tema fica escuro
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        // Troca para a lua quando o tema fica claro
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Manter a escolha do tema ao atualizar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }
});