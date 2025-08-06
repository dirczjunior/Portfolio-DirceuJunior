document.addEventListener('DOMContentLoaded', function() {
    // Script do acordeão
    const accordions = document.querySelectorAll('.accordion-button');
    
    accordions.forEach(function(button) {
        button.addEventListener('click', function() {
            const accordionBody = this.nextElementSibling;
            
            if (accordionBody.classList.contains('show')) {
                accordionBody.classList.remove('show');
                this.classList.remove('active');
                accordionBody.style.maxHeight = '0';
            } else {
                document.querySelectorAll('.accordion-body').forEach(function(body) {
                    body.classList.remove('show');
                    body.style.maxHeight = '0';
                });
                accordions.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                accordionBody.classList.add('show');
                this.classList.add('active');
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            }
        });
    });

    // Script do menu hambúrguer
    const menuHamburguer = document.querySelector('.menuHamburguer');
    const menuNavegacao = document.querySelector('.menuNavegacao');

    menuHamburguer.addEventListener('click', () => {
        menuNavegacao.classList.toggle('active');
        menuHamburguer.classList.toggle('active');
    });
});