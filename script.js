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

    // Script do carrossel
document.addEventListener('DOMContentLoaded', function () {
  const carrossel = document.querySelector('.carrosselProjetos');
  const btnPrev = document.querySelector('.btnCarrossel.prev');
  const btnNext = document.querySelector('.btnCarrossel.next');

  if (carrossel && btnPrev && btnNext) {
    const scrollAmount = carrossel.clientWidth * 0.8;

    btnNext.addEventListener('click', () => {
      carrossel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    btnPrev.addEventListener('click', () => {
      carrossel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    // autoplay
    let direction = 1;

    setInterval(() => {
      if (direction === 1 && carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 5) {
        direction = -1;
      } else if (direction === -1 && carrossel.scrollLeft <= 5) {
        direction = 1;
      }

      carrossel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }, 15000);
  }
});

// Script do footer
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.toTop')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
