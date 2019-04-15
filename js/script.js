const
	//FiveSliders start	
	rBtn = document.querySelector('.fiveslider-rightbtn'),
	lBtn = document.querySelector('.fiveslider-leftbtn'),
	fivesliderInside = document.querySelector('.fiveslider-inside'),
	fivesa = document.querySelector('.srr-dse'),
	slideWidth = fivesliderInside.clientWidth + 60,
	fivesl = document.querySelector('.srr-dse').clientWidth - slideWidth * 2,
	//FiveSliders end
	//Three Sliders start
	knopki = document.querySelectorAll('.menu-three > div'),
	dlinaBlokaThree = document.querySelectorAll('.slide-three')
threeActive = 0
//ThreeSliders end

bodyLink = document.querySelector('body');
sectOne = document.querySelector('.sect-one');
sectOneImg = document.querySelector('.sect-one img');
sectTwoImg = document.querySelector('.sect-two img');

;

window.addEventListener('scroll', (event) => {


	let curpos = sectTwoImg.getBoundingClientRect()

	sectTwoImg.style.transform = `translateY(${-curpos.top / 10}px)`

	console.log(curpos.top)
})

sectOne.addEventListener('mousemove', (event) => {
	let curpos = {
		top: event.pageY / 80,
		left: event.pageX / 80
	}
	sectOneImg.style.transform = `translateY(${curpos.top}px) translateX(${curpos.left}px)`
})

knopki.forEach(function (item, i) {
	item.addEventListener('mousedown', () => {
		for (var iie = 0; iie < dlinaBlokaThree.length; iie++) {
			dlinaBlokaThree[iie].classList.remove('active')
		}
		dlinaBlokaThree[i].classList.add('active')
	})
})

let slideCount = 0;
//fivesliders start
rightSlide = () => {
	slideCount = slideCount + slideWidth
	if (slideCount > fivesl) {
		slideCount = 0
	}
	fivesa.style.transform = 'translateX(-' + slideCount + 'px)'
}
leftSlide = () => {
	if (slideWidth + slideCount != slideWidth && slideCount != 0) {
		slideCount = slideCount - slideWidth;
	}
	else {
		slideCount = slideWidth * 2;
	}
	fivesa.style.transform = 'translateX(-' + slideCount + 'px)'
}
rBtn.addEventListener('mouseup', rightSlide)
lBtn.addEventListener('mouseup', leftSlide)
						//fivesliders end
						//Three Sliders start
