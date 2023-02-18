setTimeout(function () {
    fun()

}, 3000)


function fun(){
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden')
}


// window.addEventListener('load',() =>{

//     const loader = document.querySelector('.loader');

//     loader.classList.add('loader-hidden')
//     location.replace('file:///home/backend_dev/subsea9/Moderna/home.html')

//     loader.addEventListener('transitioned', () =>{
//         document.body.removeChild('loader')
//     })

//   })

  // window.addEventListener('load',() =>{

  //   const loader = document.querySelector('.loader');

  //   loader.classList.add('loader-hidden')

  //   loader.addEventListener('transitionend', () =>{
  //       document.body.removeChild('loader')
  //   })

  // })



  window.onload = function() {

    var slider1 = new Slider({
        images: '.slider-1 img',
        btnPrev: '.slider-1 .buttons .prev',
        btnNext: '.slider-1 .buttons .next',
        auto: false
    });

   var slider2 = new Slider({
        images: '.slider-2 img',
        btnPrev: '.slider-2 .buttons .prev',
        btnNext: '.slider-2 .buttons .next',
        auto: true,
        rate: 2000
    });
}

function Slider(obj) {

  this.images = document.querySelectorAll(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

  var i = 0;
    var slider = this;

  this.prev = function () {
    slider.images[i].classList.remove('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add('shown');
  }

  this.next = function () {
    slider.images[i].classList.remove('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add('shown');
  }

    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;

  if (slider.auto)  {
        setInterval(slider.next, slider.rate);
    }
}