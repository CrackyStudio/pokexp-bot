function pxp_autoFight(){
    diText = "di "
    di = document.getElementsByClassName(diText);
    if(di.length > 0) {
        refreshText = '.ui-minimalist-refresh'
        refresh = document.querySelector(refreshText)
        dpText = 'Les Pokémon sauvages ont déjà été battus ou capturés. Attends la prochaine actualisation.'
        if(document.body.innerHTML.toString().indexOf(dpText) > -1){
            refresh.click();
        };    
        for(var i = 0; i < di.length; i++) {
            if(di[i].className == diText) {
                di[i].click();
                fbText = "fight-button"
                fb = document.getElementsByClassName(fbText)
                pvText = "pv"
                pv = document.getElementsByClassName(pvText)
                if(fb.length > 0 && !pv.length > 0) {
                    fb[0].click();  
                } else {
                    if(pv.length > 0) {
                        if(pv[1].textContent > 0) {
                            attacksText = "w12 ph1 pv1 bgt6 c tooltip attack tooltipstered"
                            attacks = document.getElementsByClassName(attacksText)
                            if(attacks.length > 0) {
                                attacks[1].click()
                            }
                        } 
                    }
                }
            }
        }
    }
    refresh.click();
    setTimeout(pxp_autoFight, 1000)
}