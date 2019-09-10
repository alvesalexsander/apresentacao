var animationFrame = $("#animationFrame");
var animationFrameText = $("#animation__text");

var contentItems = ["Sobre Mim", "Hobbies e interesses", "Experiências", "Eu na IBM!"];

startElem = $("#about");
endElem = $("#ibm");

var before = 0;
var active = $("#about");
var after = active.next(); 
var activeIndex = 0;

var wait = false; 

var waitRelease; 

setTimeout(() => {

    if(!wait){

        $(window).bind('mousewheel', function(event) {
            if ((event.originalEvent.wheelDelta > 0) && (wait == false)) {
        
                if(active != startElem){

                    if(this.activeIndex > 0){
                        this.activeIndex--;
                    } else {
                        if(this.activeIndex == 0){
                            active = $("#about");
                            after = active.next();
                            before = active.prev();
                        }
                    }

                    let animationIn = setTimeout(() => {
                        animationFrameText.html(contentItems[this.activeIndex]);
                        $("body").append(animationFrame);
                    }, 100);

                    let toggleClass = setTimeout(() => {

                        if(active[0].id == "about"){
                            return false;
                        } else {
                            this.active.toggleClass("contentActive");
                            this.active.toggleClass("contentHidden");
                            this.before.toggleClass("contentHidden");
                            this.before.toggleClass("contentActive");
                        }
                        
                        if(this.activeIndex == 0){
                            active = $("#about");
                            after = active.next();
                            before = active.prev();
                        } else {
                            active = this.before;
                            after = active.next();
                            before = active.prev();
                        }
                    }, 600);

                    waitRelease = setTimeout(()=>{
                        wait = false;
                        clearTimeout(waitRelease);
                    }, 700);

                    wait = true;
                }
        
            }
        
            else if((event.originalEvent.wheelDelta < 0) && (wait == false)) {
        
                if(active != endElem){
                    if(this.activeIndex < 3){
                        this.activeIndex++;
                    }

                    let animationIn = setTimeout(() =>{
                        animationFrameText.html(contentItems[this.activeIndex]);
                        $("body").append(animationFrame);
                    }, 100);

                    let toggleClass = setTimeout(() => {

                        if(active[0].id == "ibm"){
                            return false;
                        } else {
                            this.active.toggleClass("contentActive");
                            this.active.toggleClass("contentHidden");
                            this.after.toggleClass("contentHidden");
                            this.after.toggleClass("contentActive");
                        }
                        
                        if(this.activeIndex == 3){
                            active = $("#ibm");
                            after = active.next();
                            before = active.prev();
                        } else {
                            active = after;
                            after = active.next();
                            before = active.prev();
                        }
                        
                    }, 600);
        
                    waitRelease = setTimeout(()=>{
                        wait = false;
                        clearTimeout(waitRelease);
                    }, 700);
        
                    wait = true;
                } else {
                    return false;
                }
        
            }
            
        });

    }

}, 700)

setTimeout(() => {

    if(!wait){

        $(window).bind('keydown', function(event) {
            switch(event.which) {        
                case 38: if (wait == false) {
        
                    if(active != startElem){
    
                        if(this.activeIndex > 0){
                            this.activeIndex--;
                        } else {
                            if(this.activeIndex == 0){
                                active = $("#about");
                                after = active.next();
                                before = active.prev();
                            }
                        }
    
                        let animationIn = setTimeout(() => {
                            animationFrameText.html(contentItems[this.activeIndex]);
                            $("body").append(animationFrame);
                        }, 100);
    
                        let toggleClass = setTimeout(() => {
    
                            if(active[0].id == "about"){
                                return false;
                            } else {
                                this.active.toggleClass("contentActive");
                                this.active.toggleClass("contentHidden");
                                this.before.toggleClass("contentHidden");
                                this.before.toggleClass("contentActive");
                            }
                            
                            if(this.activeIndex == 0){
                                active = $("#about");
                                after = active.next();
                                before = active.prev();
                            } else {
                                active = this.before;
                                after = active.next();
                                before = active.prev();
                            }
                        }, 600);
    
                        waitRelease = setTimeout(()=>{
                            wait = false;
                            clearTimeout(waitRelease);
                        }, 700);
    
                        wait = true;
                    }
            
                }
                break;
        
                case 40: if(wait == false) {
        
                    if(active != endElem){

                        if(this.activeIndex < 3){
                            this.activeIndex++;
                        }
    
                        let animationIn = setTimeout(() =>{
                            animationFrameText.html(contentItems[this.activeIndex]);
                            $("body").append(animationFrame);
                        }, 100);
    
                        let toggleClass = setTimeout(() => {
    
                            if(active[0].id == "ibm"){
                                return false;
                            } else {
                                this.active.toggleClass("contentActive");
                                this.active.toggleClass("contentHidden");
                                this.after.toggleClass("contentHidden");
                                this.after.toggleClass("contentActive");
                            }
                            
                            if(this.activeIndex == 3){
                                active = $("#ibm");
                                after = active.next();
                                before = active.prev();
                            } else {
                                active = after;
                                after = active.next();
                                before = active.prev();
                            }
                            
                        }, 600);
            
                        waitRelease = setTimeout(()=>{
                            wait = false;
                            clearTimeout(waitRelease);
                        }, 700);
            
                        wait = true;
                    } else {
                        return false;
                    }
            
                }
                break;
        
                default: return;
            }
            event.preventDefault();

        });

    }

}, 700)