const codeFront = document.querySelector('.codeFront');
const artFront = document.querySelector('.artFront');

artFront.addEventListener('mouseover', function () {
	const codeBack = document.querySelector('.codeBack');
	const artBack = document.querySelector('.artBack');

	artBack.style.background = '#ddd';
	codeBack.style.background = '#222';
});

codeFront.addEventListener('mouseover', function () {
	const codeBack = document.querySelector('.codeBack');
	const artBack = document.querySelector('.artBack');

	codeBack.style.background = '#ddd';
	artBack.style.background = '#222';
});
