const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const allSections = document.querySelectorAll(".main-content");

function PageTransition() {
  // Button click active class
  const sectBtn = document.querySelectorAll(".control");

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    });

  }

  allSections.forEach((section) => {
    section.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (id) {
        sectBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        e.target.classList.add('active');

        sections.forEach((section) => {
          section.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    });
  });
  //Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

PageTransition();








