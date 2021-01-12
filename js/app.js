$(document).ready(function(){
    $(this).keydown(function(e){
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    
        if (!audio) return; //stop function from continiuing
    
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        audio.play();
        key.classList.add('playing');
    });

    $(this).keyup(function(){
        $('div').removeClass('playing');
    });
});