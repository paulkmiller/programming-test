// out of time

$(document).ready(function(){
var delay = 100;
var words = ['Awesome People', 'Brave', 'Agile', 'Intelligent', 'Product People'];

$.each(words.split(''), function (i, letter) {
    setTimeout(function () {
        $('.typewriter-text').append(letter);

    }, delay * i);
});
}