//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(img, texto, link) {
        this.img = img;
        this.texto = texto;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            document.getElementById('carousel-next').addEventListener('click', Carousel.Next);
            document.getElementById('carousel-prev').addEventListener('click', Carousel.Prev);
            Carousel.UpdateContent(); 
            
            const carouselContainer = document.getElementById('carousel-container'); 
            if (carouselContainer) {
                carouselContainer.addEventListener('mouseover', Carousel.Pause);
                carouselContainer.addEventListener('mouseleave', Carousel.RestartInterval);
            }

            Carousel.RestartInterval();
        }
    }

    
    static Next() {

        Carousel.Pause(); 

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0; 
        }
        Carousel.UpdateContent();
        Carousel.RestartInterval();
    }

    static Prev() {
        Carousel.Pause(); 
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1; 
        }

        Carousel.UpdateContent();
        Carousel.RestartInterval();
    }

    static UpdateContent() {
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        const atual = Carousel._arr[Carousel._sequence];
        carousel.innerHTML = `<img src="img/${atual.img}" alt="${atual.texto}">`;
        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
    }
    
    static Pause() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }
    }

     static RestartInterval() {
        Carousel.Pause();
        Carousel._interval = setInterval(function () {
        Carousel._sequence++;
        
            if (Carousel._sequence >= Carousel._size) {
                Carousel._sequence = 0;
            }
            Carousel.UpdateContent();
        }, 3000);
    }
}