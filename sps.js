var choice=""
var computerChoice=""
var playerPunt=0
var computerPunt=0
var steen=0
var papier=1
var schaar=2
Array(0,2)
function playGame(choice
    ){
    computerChoice=Math.floor(Math.random()*3)

        if (choice == 0 && computerChoice == 1){     
            alert(computerChoice)   
            alert("verloren")
            computerPunt++
        }
         if (choice == 0 && computerChoice == 2){     
             alert(computerChoice)   
             alert("gewonnen5")
             computerPunt++
        }
            
        if (choice == computerChoice){     
            alert(computerChoice)   
            alert("gelijkspel")
        }

         if (choice == 1 && computerChoice == 0){     
             alert(computerChoice)   
             alert("gewonnen")
             playerPunt++
        } 
            
        if (choice == 1 && computerChoice == 1){     
            alert(computerChoice)   
            alert("gelijkspel")
        }
        
        if (choice == 1 && computerChoice == 2){     
             alert(computerChoice)   
            alert("verloren")
            computerPunt++
    }
        if (choice == 2 && computerChoice == 0){     
            alert(computerChoice)   
            alert("verloren")
            computerPunt++
}
        if (choice == 2 && computerChoice == 1){     
            alert(computerChoice)   
            alert("gewonnen")
            gewonnenPunt++
}
        if (choice == 2 && computerChoice == 2){     
            alert(computerChoice)   
            alert("gelijkspel")
}
    }   



  





