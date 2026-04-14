# Página Pessoal 

Este projeto consiste no desenvolvimento de uma página pessoal responsiva, criada como parte da disciplina **GAC116 - Programação Web (2026/1)** na **Universidade Federal de Lavras (UFLA)**.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido em duas versões (clique para ver as versões!):

1.   [**Versão Bootstrap**](https://vitoriaamarals.github.io/pagina-pessoal/bootstrap/)
2.   [**Versão Tailwind CSS**](https://vitoriaamarals.github.io/pagina-pessoal/tailwind/)

**Outras tecnologias:**
* HTML5 & CSS3
* JavaScript (Lógica de troca de tema e interatividade)
* Font Awesome (Ícones)
* Google Fonts (Fonte Inter)

## 🎨 Funcionalidades

- [x] **Layout Responsivo:** Adaptável para dispositivos móveis, tablets e desktop.
- [x] **Dark/Light Mode:** Alternância de tema via botão (toggle) com persistência no `localStorage`.
- [x] **Seções Detalhadas:** Sobre mim, Formação Acadêmica, Projetos e Contato.

## 📊 Comparativo: Bootstrap vs Tailwind

Durante o desenvolvimento, foram observadas as seguintes diferenças:

* **Bootstrap:** Facilitou a criação rápida da Navbar e dos Cards de projeto usando componentes pré-prontos. O uso de `data-bs-theme` tornou a implementação do Dark Mode muito direta.
* **Tailwind:** Permitiu um controle muito maior sobre o design (como o efeito de gradiente e bordas personalizadas), mas exigiu uma escrita de classes mais extensa no HTML.

## 📁 Estrutura do Repositório

```text
/
├── bootstrap/       # Versão desenvolvida com Bootstrap
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── tailwind/        # Versão desenvolvida com Tailwind CSS
│   ├── index.html
│   └── script.js
└── README.md