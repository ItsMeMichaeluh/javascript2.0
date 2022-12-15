var choice=""
var computerChoice=""
var computerChoices=["Steen", "Papier", "Schaar"]
var playerPunt=0
var computerPunt=0
var steen=0
var papier=1
var schaar=2

function endGame(winnaar){
    if (winnaar == "speler") {
    setTimeout(function() {
        alert("Jij heb 3 punten, je bennt een kei :)")
        gameReset();
    }, 0)
} else if (winnaar == "computer")
    setTimeout (function() {
        alert("Computer heeft 3 punten, jij bent geen kei :(")
        gameReset();
    }, 0)
}


function gameReset(){
    document.getElementById('tekst').innerHTML=""
    document.getElementById('tekst1').innerHTML=""
    document.getElementById('rondeUitslag').innerHTML=""
    document.getElementById('computerKoos').innerHTML=""
    playerPunt=''
    computerPunt=''
    }

function spelerWin(){
    playerPunt++
    document.getElementById('tekst').innerHTML=playerPunt      
    document.getElementById('rondeUitslag').innerHTML=('gewonnen')
    if  
    (playerPunt==3){
    endGame("speler")
}   
}

function computerWin(){
    computerPunt++
    document.getElementById('tekst1').innerHTML=computerPunt  
    document.getElementById('rondeUitslag').innerHTML=('verloren')
if (computerPunt==3){
    endGame("computer")
}
}

function playGame(choice){
    computerChoice=Math.floor(Math.random()*3)

    document.getElementById("computerKoos").innerHTML = computerChoices[computerChoice];
    if (choice == computerChoice){       
        document.getElementById('rondeUitslag').innerHTML=('gelijk spel')
}
    
        if (choice == 0 && computerChoice == 1){     
                computerWin()

            
        }
         if (choice == 0 && computerChoice == 2){  
                spelerWin()
             
        }
            
         if (choice == 1 && computerChoice == 0){     
                spelerWin()
                
        } 
            
        
        if (choice == 1 && computerChoice == 2){     
                computerWin()
            
    }
        if (choice == 2 && computerChoice == 0){     
                computerWin()
                
    }
        if (choice == 2 && computerChoice == 1){     
            spelerWin()
    }   
}


  





