document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de acordeão
    const accordions = document.querySelectorAll('.accordion-button');
    
    // Adiciona o evento de clique para cada botão
    accordions.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtém o conteúdo associado ao botão clicado
            const accordionBody = this.nextElementSibling;
            
            // Se o conteúdo já estiver visível, recolhe ele e remove a classe 'active'
            if (accordionBody.classList.contains('show')) {
                accordionBody.classList.remove('show');
                this.classList.remove('active');
                // Define a altura máxima para 0 para iniciar a transição
                accordionBody.style.maxHeight = '0';
            } else {
                // Recolhe todos os conteúdos e remove a classe 'active' de todos os botões
                document.querySelectorAll('.accordion-body').forEach(function(body) {
                    body.classList.remove('show');
                    body.style.maxHeight = '0';
                });
                accordions.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                // Expande o conteúdo e adiciona a classe 'show' ao botão clicado
                accordionBody.classList.add('show');
                this.classList.add('active');
                // Define a altura máxima para o scrollHeight do conteúdo para iniciar a transição
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            }
        });
    });
});