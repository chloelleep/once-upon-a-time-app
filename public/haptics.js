window.addEventListener('load', 
  function() { 

let activeImage = null;

const images = document.querySelectorAll('img');

const audio1 = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_1d0ef3b7be.mp3?filename=oink-40664.mp3');
const audio2 = new Audio('https://www.televisiontunes.com/uploads/audio/Peppa%20Pig.mp3');

audio1.muted = false;

images.forEach(image => {
	const imageId = image.getAttribute('id');

	// Handle mouse events
	image.addEventListener('mousedown', () => {
		console.log('mousedown event');

		if (activeImage) {
			activeImage.classList.remove('image-active');
		}

		image.classList.add('image-active');
		activeImage = image;

		if (imageId === 'image1' || imageId === 'image_b_1') {
			console.log('Image 1 selected');
			audio1.play();
			
		} 
		else if (imageId === 'image2') {
			console.log('Image 2 selected');
			audio2.play();
			
		} 
	});

	image.addEventListener('mouseup', () => {
		console.log('mouseup event');

		audio1.pause();
		audio2.pause();

	});

	// Handle touch events
	image.addEventListener('touchstart', (e) => {
		console.log('touchstart event');

		if (activeImage) {
			activeImage.classList.remove('image-active');
		}

		const touches = e.touches;
		const firstTouch = touches[0];
		const touchX = firstTouch.clientX;
		const touchY = firstTouch.clientY;
		image.style.left = touchX + 'px';
		image.style.top = touchY + 'px';
		activeImage = image;

		if (imageId === 'image1' || imageId === 'image_b_1') {
			console.log('Image 1 selected');
			audio1.play();
		} 
		else if (imageId === 'image2') {
			console.log('Image 2 selected');
			audio2.play();
		} 
	});

	image.addEventListener('touchmove', (e) => {
		console.log('touchmove event');

		const touches = e.touches;
		const firstTouch = touches[0];
		const touchX = firstTouch.clientX;
		const touchY = firstTouch.clientY;
		image.style.left = touchX + 'px';
		image.style.top = touchY + 'px';
	});

	image.addEventListener('touchend', () => {
		console.log('touchend event');

		audio1.pause();
		audio2.pause();

});

const stopSwipe = () => {
	console.log('stopSwipe event');

	audio1.pause();
	audio2.pause();

};

})

  })