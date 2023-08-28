//SELECT

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false
});

//MAP

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.85882333950175,2.3470419999999894],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 11
  });

  var myPlacemark = new ymaps.Placemark ([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/subtract.svg',
    iconImageSize: [30,42],
    iconImageOffset: [-3,-42]
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
}


// FORM

var selector = document.querySelector("input[type='phone']");
var im = new Inputmask("+7 (999) 999 99 99");

im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        phone: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        }
    },
    messages: {
      name: {
      required: "Как вас зовут?",
      minLength: "Коротковато"
     },
     phone: {
      required: "Укажите ваш телефон",
      function: "Неправильно набран номер"
     },
     mail: {
      required: "Укажите ваш e-mail",
      email: "Неверный e-mail",
     }
   }
});

//TT

tippy('#myButton', {
  content: 'Глава 2, страница 176',
});
