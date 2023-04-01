import { results, mbtis } from "./data.js";

const searchParams = new URLSearchParams(location.search);
const param1 = searchParams.get('mbti');
var search = 'I';
var count = 0;
let mbti2= ''

for ( var i = 0; i < param1.length; i++ ) {
    if ( param1[i] !== search ) continue;
    count++; 
}
if (count>=2) {
 mbti2='I';
} else {
 mbti2='E';
}

var search = 'S';
var count = 0;
for ( var i = 0; i < param1.length; i++ ) {
    if ( param1[i] !== search ) continue;
    count++; 
}
if (count>=2) {
 mbti2=mbti2+'S';
} else {
 mbti2=mbti2+'N';
}

var search = 'T';
var count = 0;
for ( var i = 0; i < param1.length; i++ ) {
    if ( param1[i] !== search ) continue;
    count++; 
}
if (count>=2) {
 mbti2=mbti2+'T';
} else {
 mbti2=mbti2+'F';
}

var search = 'J';
var count = 0;
for ( var i = 0; i < param1.length; i++ ) {
	
    if ( param1[i] !== search ) continue;
    count++; 
}
if (count>=2) {
 mbti2=mbti2+'J';
} else {
 mbti2=mbti2+'P';
}

console.log(mbti2)

const result = results[mbtis[mbti2]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const frinedEls = document.querySelectorAll('.friend')
const friendImgEls = document.querySelectorAll('.friendImg')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function( boxEl, index){
  boxEl.innerHTML = result.results[index]
})
frinedEls.forEach(function( friendEl, index){
    friendEl.innerHTML = result.friends[index]
})
friendImgEls.forEach(function( friendImgEl, index){
    friendImgEl.src = result.friendImgs[index]
})