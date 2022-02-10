//slider 
$('.section__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  nextArrow: '.right__slider',
  prevArrow: '.left__slider',
});


$('.gym__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  nextArrow: '.right__slider',
  prevArrow: '.left__slider',
  
  responsive: [
     {
      breakpoint: 704,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },  
    
    {
      breakpoint: 536,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }, 
  ],
});



//burger
const rdNavbarToggle = document.querySelectorAll('.rd-navbar-toggle');
const rdNavbarToggle__items = document.querySelector('.rd-navbar-toggle__items');
const rdNavbarToggle__items2 = document.querySelector('.rd-navbar-toggle__items2');
const rdNavbarToggle__items3 = document.querySelector('.rd-navbar-toggle__items3');
const header__jsburger = document.querySelector('.header__jsburger');




for (let i = 0; i < rdNavbarToggle.length; i++) {
  if (rdNavbarToggle[i]) {
    rdNavbarToggle[i].addEventListener('click', () => {
      rdNavbarToggle__items2.classList.toggle('open');
      rdNavbarToggle__items.classList.toggle('open');
      rdNavbarToggle__items3.classList.toggle('open');
      header__jsburger.classList.toggle('open');
    })
  } else {
    console.log('false')
  }

}



// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

const map = document.querySelector('#map');

if(map) {
  ymaps.ready(init);
  console.log('true');
} else {
  console.log('false');
}

  
function init() {
  // Создание карты.



  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.85944306888531, 37.56847949999998],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });



  myMap.behaviors.disable('drag');
  myMap.behaviors.disable('scrollZoom');


  //Создание метки на карте
  const myPlacemark = new ymaps.Placemark(
    //Координаты метки
    [55.85944306888531, 37.56847949999998]
  );


  //Добавление метки на карту
  myMap.geoObjects.add(myPlacemark)
}



//якоря btn

const btn = document.querySelectorAll('.prices__flex a');


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    btn[i].classList.add('open');
  })
}

//якорь

const anchors = document.querySelectorAll('.prices__flex a');


  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
  
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };  



//popup 

const popup_link = document.querySelectorAll('.popup_link');
const popup_close = document.querySelectorAll('.popup_close');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');



let unlock = true;

const timeout = 800;




for (let i = 0; i < popup_link.length; i++) {
	popup_link[i].addEventListener('click', (event) => {
		const popupName = popup_link[i].getAttribute('href').replace('#', '');
		const popupCurent = document.getElementById(popupName);
		popupOpen(popupCurent);
		event.preventDefault();
	});
};


for (let i = 0; i < popup_close.length; i++) {
	popup_close[i].addEventListener('click', (event) => {
		popupClose(popup_close[i].closest('.popup'));
		event.preventDefault();
	});
};



function popupOpen(popupCurent) {
	if (popupCurent && unlock) {
		const popupActive = document.querySelector('.popup.open');

		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodylock();
		}


		popupCurent.classList.add('open');
		popupCurent.addEventListener('click', (event) => {
			if (!event.target.closest('.popup_content')) {
				popupClose(event.target.closest('.popup'));
			};
		});
	};
}


function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');

		if (doUnlock) {
			bodyUnlock();
			console.log('Истина');
		};
	};
};


function bodylock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.popup').offsetWidth + 'px'; //Получили ширину scrolla

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');


	console.log(lockPaddingValue)
};


function bodyUnlock() {
	setTimeout(function () {
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout)
};







