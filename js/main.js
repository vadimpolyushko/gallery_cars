
//Переход по страницам(секциям)
const navElements = document.querySelectorAll('a[href^="#"]');
navElements.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});


//Слайдер
   $('.slider__wrapper-max').slick({
            infinite: true,
            slidesToScroll: 3,
            slidesToShow: 3,
            responsive: [
              {
                breakpoint:1132,
                settings:{
                  slidesToShow:2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint:761,
                settings:{
                  slidesToShow:1,
                  slidesToScroll: 1,
                }
              }
            ]
        });

//Слайдер
        $('.drive__item-slider').slick();


//Бургер-меню
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}




//Кннопка вверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();