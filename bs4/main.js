function toggle() {
	var elem = document.getElementById('burger');
	elem.classList.toggle('d-none');
	var ul = document.getElementById('ul');
	ul.classList.toggle('nav');
	var search = document.getElementById('search');
	search.classList.toggle('d-none');
}
