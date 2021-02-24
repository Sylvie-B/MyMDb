import {filmArray} from './ar_film.js';

let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';
container.style.width = window.innerWidth + 'px';

$('.carousel').carousel();

// create .carousel-item div * film + add .active to the first div
// append child all film img
let poster = $('#poster');

// thumbnails : get genre + same genre film
let genre = $('#genre');

// create img link for all film + add all on allFilms section
let allFilms = $('#allFilms');

for(let i = 0 ; i < filmArray.length ; i++){
    poster.append("<div class=\'carousel-item\'><a href=\'film_detail.php\'><img src=\'" + filmArray[i][1] + "\' alt=\'affiche\'></a></div>")
    genre.append("<div><a href=\'film_detail.php\'><img src=\'" + filmArray[i][1] + "\' alt=\'affiche\'></a></div>")
    allFilms.append("<a href=\'film_detail.php\'><img src=\'" + filmArray[i][1] + "\' alt=\'affiche\'></a>");
}
document.querySelector('.carousel-item').classList.add("active");

