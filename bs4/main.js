function toggle() {
	var elem = document.getElementById('burger');
	elem.classList.toggle('d-none');
	var li = document.getElementsByClassName('ul__item');
	for (var i = 0; i < li.length; i++) {
		li[i].classList.toggle('li--burger');
	}

	var search = document.getElementById('search');
	search.classList.toggle('d-none');
}

function lineview() {
	var desc = document.querySelectorAll('.description_text')
	for (var i = 0; i < desc.length; i++) {
		desc[i].classList.remove('d-none');
	}

	var pics = document.querySelectorAll('div.portfolio-item');
	for (var i = 0; i < pics.length; i++) {
		pics[i].classList.remove('col-lg-4', 'col-md-6');
		pics[i].classList.add('col-md-10');

	}
}

function gridview() {
	var pics = document.querySelectorAll('div.portfolio-item');
	for (var i = 0; i < pics.length; i++) {
		pics[i].classList.add('col-lg-4');
		pics[i].classList.add('col-md-6');
	}
	var desc = document.querySelectorAll('div.description_text')

	for (var i = 0; i < desc.length; i++) {
		desc[i].classList.add('d-none');

	}
}

function addButton(e) {
	let target = e.target;
	target.classList.remove('img-block--camera');
	target.insertAdjacentHTML('afterbegin', eye);
}

function removeButton(e) {
	let target = e.target;
	target.classList.add('img-block--camera');
	while (target.firstChild) {
		target.firstChild.remove();
	}
}

var elements = document.getElementsByClassName('img-block--camera');
var eye = '<h3 class="bree-serif py-4 section__h3" style="color: #fff">Lorem ipsum dolor sit.</h3><p class="font-ubuntu px-1 section__p" style="color: #fff">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, voluptas.</p><div class="img-block__button mx-auto"><a href=""><img src="img/eye.png" alt="">Details</a>'

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('mouseenter', addButton, false);
	elements[i].addEventListener('mouseleave', removeButton, false);
}
