var killed = false
function autoFight(){
    if(document.getElementsByClassName("di ").length > 0) {
        document.getElementsByClassName("di ")[1].click();
    }
    if(document.getElementsByClassName("fight-button").length > 0) {
        document.getElementsByClassName("fight-button")[0].click();
    }
    if(document.getElementsByClassName("pv").length > 0) {
        if(document.getElementsByClassName("pv")[1].textContent > 0) {
            if(document.getElementsByClassName("w12 ph1 pv1 bgt6 c tooltip attack tooltipstered").length > 0) {
                document.getElementsByClassName("w12 ph1 pv1 bgt6 c tooltip attack tooltipstered")[1].click()
                killed = true
            }
        } 
    } else {
        if (killed) {
            if(document.getElementsByClassName("close is").length > 0) {
                document.getElementsByClassName("close is")[0].click();
                document.querySelector('.ui-minimalist-refresh').click();
                killed = false
            }
        }
    }
    if(document.body.innerHTML.toString().indexOf('Les Pokémon sauvages ont déjà été battus ou capturés. Attends la prochaine actualisation.') > -1){
        document.querySelector('.ui-minimalist-refresh').click();
    };
    setTimeout(autoFight, 1000)
}