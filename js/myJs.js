import {filmJson} from './ar_film.js';

let container = document.getElementById('container');
container.style.height = window.innerHeight + 'px';
container.style.width = window.innerWidth + 'px';

// create link .carousel-item div * film
// append each img in poster, genre, allFilms
let poster = $('#poster');
let genre = $('#genre');
let allFilms = $('#allFilms');
let info = $('#info');

for(let i = 0 ; i < filmJson.length ; i++){
    poster.append("<div class='carousel-item'><a href='film_detail.php'><img class='d-block w-80' src='" + filmJson[i].poster + "' alt='affiche'></a></div>");
    genre.append("<div><a href='film_detail.php'><img src='" + filmJson[i].poster + "' alt='affiche'></a></div>");
    allFilms.append("<a href='film_detail.php'><img src='" + filmJson[i].poster + "' alt='affiche'></a>");
}
// add .active to the first div .carousel-item
document.querySelector('.carousel-item').classList.add("active");
