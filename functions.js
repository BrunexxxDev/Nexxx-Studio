/**
 * @file functions.js
 * @description Handles interactive functionalities for the Nexx Studio website,
 * including the mobile navigation menu and active link highlighting.
 */

/**
 * Executes when the DOM is fully loaded.
 * Initializes all event listeners for the page.
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de alternância do menu (hambúrguer)
    const menuToggle = document.querySelector('.menu-toggle');
    // Seleciona a navegação principal (que deve deslizar)
    const mainNav = document.querySelector('.main-nav');
    // Seleciona todos os links para gerenciar o estado ativo
    const navLinks = document.querySelectorAll('.nav-link');

    // ===================================
    // 1. FUNCIONALIDADE DO MENU HAMBURGUER (MOBILE)
    // ===================================
    if (menuToggle && mainNav) {
        /**
         * Toggles the mobile menu's visibility when the hamburger icon is clicked.
         * It adds or removes the 'open' class to the navigation menu and swaps
         * the hamburger icon with a close icon.
         * @listens click
         */
        menuToggle.addEventListener('click', function() {
            // ESSENCIAL: Alterna a classe 'open' na tag <nav> para o CSS exibir o menu
            mainNav.classList.toggle('open'); 

            // Opcional: Altera o ícone (hambúrguer <-> X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ícone X
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Ícone Hambúrguer
            }
        });
    }

    // ======================================
    // 2. FUNCIONALIDADE DE LINK ATIVO (DESTAQUE AZUL)
    // ======================================
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            /**
             * Handles the 'active' state for navigation links.
             * When a link is clicked, it removes the 'active' class from all links,
             * adds it to the clicked link, and closes the mobile menu if it's open.
             * @param {Event} event - The click event object.
             * @listens click
             */
            link.addEventListener('click', function(event) {
                // Impede a navegação padrão (para que o destaque funcione sem recarregar)
                event.preventDefault(); 
                
                // 1. Remove a classe 'active' de TODOS os links
                navLinks.forEach(item => {
                    item.classList.remove('active');
                });

                // 2. Adiciona a classe 'active' APENAS ao link clicado
                this.classList.add('active');

                // 3. (Mobile) Fecha o menu após o clique em um link
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    
                    // Reverte o ícone para hambúrguer
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
