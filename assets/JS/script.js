// On récupère les cartes du DOM

var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card6 = document.getElementById('card6');
var card7 = document.getElementById('card7');

// On récupère les boutons du DOM

var htmlButton = document.getElementById('html')
var cssButton = document.getElementById('css')
var jsButton = document.getElementById('js')
var allButton = document.getElementById('all')

// Trie des cartes

htmlButton.addEventListener('click', function() {
    card1.style.display = "block"
    card2.style.display = "none"
    card3.style.display = "none"
    card4.style.display = "none"
    card5.style.display = "block"
    card6.style.display = "none"
    card7.style.display = "none"
})

cssButton.addEventListener('click', function() {
    card1.style.display = "block"
    card2.style.display = "none"
    card3.style.display = "none"
    card4.style.display = "block"
    card5.style.display = "block"
    card6.style.display = "none"
    card7.style.display = "none"
})

jsButton.addEventListener('click', function() {
    card1.style.display = "none"
    card2.style.display = "block"
    card3.style.display = "block"
    card4.style.display = "none"
    card5.style.display = "none"
    card6.style.display = "block"
    card7.style.display = "block"
})

allButton.addEventListener('click', function() {
    card1.style.display = "block"
    card2.style.display = "block"
    card3.style.display = "block"
    card4.style.display = "block"
    card5.style.display = "block"
    card6.style.display = "block"
    card7.style.display = "block"
})

// Compte à rebours 

jQuery(function($){

    var launch = new Date(2021,09,27);
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');


setDate();
function setDate() {
    var now = new Date();
    var s =((launch.getTime()-now.getTime())/1000);
    var d = Math.floor(s/86400);
    days.html(d+' jour'+(d>1?'s':''));
    s -= d*86400;
    
    var h = Math.floor(s/3600);
    hours.html(h+' heure'+(h>1?'s':''));
    s -= h*3600;

    var m = Math.floor(s/60);
    minutes.html(m+' minute'+(m>1?'s':''));
    s -= m*60;

    s = Math.floor(s);
    seconds.html(s+" seconde" + (s>1?'s':''));

    setTimeout(setDate,1000);
}

});


