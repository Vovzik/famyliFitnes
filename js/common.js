/*Маска для инпута*/
var telInp = $('input[type="tel"]');

telInp.each(function () {
	$(this).mask("+7 (999) 999-99-99");
});


let section_blockformName = document.querySelectorAll('[type="name"]');


let text_value = document.querySelectorAll('.text_value');





for (let i = 0; i < section_blockformName.length; i++) {
	section_blockformName[i].value = 'Ваше имя?';
}







for (let i = 0; i < text_value.length; i++) {
	text_value[i].addEventListener('click', () => {
		text_value[i].value = null;
	})
}




















