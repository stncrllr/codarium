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
