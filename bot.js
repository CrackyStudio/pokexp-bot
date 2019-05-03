    
    function pxp_autoFight(){
        level = document.getElementsByClassName("level");
        di = document.getElementsByClassName("di ");
        sec = document.getElementsByClassName("sec")
        fb = document.getElementsByClassName("fight-button")
        pv = document.getElementsByClassName("pv")
        attacks = document.getElementsByClassName("w12 ph1 pv1 bgt6 c tooltip attack tooltipstered")
        refresh = document.querySelector(".ui-minimalist-refresh")
        if(di.length > 0) {
            for(var i = 0; i < di.length; i++) {
                if (di.length == 1) {
                    if(document.body.innerHTML.toString().indexOf("Les Pokémon sauvages ont déjà été battus ou capturés. Attends la prochaine actualisation.") > -1){
                        if (sec.length > 0) {
                            if(sec[0].textContent == "00") {
                                refresh.click();
                            }
                        }    
                    }; 
                }
                if(di[i].className == "di ") {
                    di[i].click();              
                    if(fb.length > 0 && !pv.length > 0) {
                        fb[0].click();
                    } else {
                        if(pv.length > 0) {
                            if(pv[1].textContent > 0) {
                                if(attacks.length > 0) {
                                    document.title = `PokExp | Bot: ${level[0].textContent}`;
                                    attacks[1].click()
                                    refresh.click();
                                }
                            }
                        } else {
                            refresh.click();
                        }
                    }
                }
            }
        }
        setTimeout(pxp_autoFight, 1000)
    }(

    pxp_autoFight())

// socket.emit('move',{private_key:KEY,direction:direct});