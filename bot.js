(function addBot() {
    let div = document.createElement('div');

    div.className = 'Bot';
    div.style = 'margin-left: 100px;background: #1e1e1e url(&quot;&quot;) no-repeat center 23px / 25px;color: white;display: flex;align-items: center;justify-content: center;/*! text-align: center; */flex-direction: row;border: 2px solid red;';
    div.innerHTML = 'Bot';

    document.getElementsByClassName('game-header--menu')[0].appendChild(div);
})()

$(".Bot").on('click', function(){
    if (document.getElementsByClassName("Bot")[0].style.border == "2px solid red") {
        $('.Bot').css({
            'border' : '2px solid green',
        });
        bot(true)
    } else {
        $('.Bot').css({
            'border' : '2px solid red',
        });
        bot(false)
    }
});

function bot(isRunning) {
    isRunning ? autoFight(true) : autoFight(false)
}

function autoFight(isRunning = true){
    if (isRunning) {
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
        ID = setTimeout(autoFight, 1000);
    } else {
        clearTimeout(ID)
    }
}

// socket.emit('move', { private_key:KEY, direction: direct });