var before = 0;
var active = document.getElementById("hero");
var after = active.nextElementSibling; //variaveis que apontam para os elementos a serem scrollados

var wait = false; // variavel para fazer debounce do mouseWheel event

var waitRelease; //variavel para fazer o reset/debounce do wait

setTimeout(() => {

    if(!wait){

        $(window).bind('mousewheel', function(event) {
        
            //scroll ao subir a página
            if ((event.originalEvent.wheelDelta > 0) && (wait == false)) {
        
                if(active != document.getElementById("hero")){
                    $('html').animate({
                        scrollTop: $(before).offset().top
                    }, 700);//coloca o elemento before no topo da pageView

                    waitRelease = setTimeout(()=>{
                        wait = false;
                        clearTimeout(waitRelease);
                    }, 700); //Timeout para zerar a variavel wait
        
                    active = before;
                    before = active.previousElementSibling;
                    after = active.nextElementSibling;

                    wait = true;
                }
        
            }
        
            //scroll ao descer a página
            else if((event.originalEvent.wheelDelta < 0) && (wait == false)) {
        
                if(active != document.getElementById("contact")){
                    $('html').animate({
                        scrollTop: $(after).offset().top
                    }, 700); //coloca o elemento after no topo da pageView
        
                    waitRelease = setTimeout(()=>{
                        wait = false;
                        clearTimeout(waitRelease);
                    }, 700); //Timeout para zerar a variavel wait

                    active = after;
                    before = active.previousElementSibling;
                    after = active.nextElementSibling;
        
                    wait = true;
                }
        
            }
            
        });

    }

}, 700)

