
function nakijken() {

    let input1=document.getElementById("input1").value
    if (input1 == "Madrid"){
        document.getElementById('antwoord1').innerHTML = "Juist"
    }else{
        document.getElementById('antwoord1').innerHTML = "Onjuist"
    }

    let input2=(document.getElementById("input2").value)
    if(input2 == "Middellandse Zee"){
        document.getElementById('antwoord2').innerHTML = "Juist"
    }else{
        document.getElementById('antwoord2').innerHTML = "Onjuist"
    }

    let input3=(document.getElementById("input3").value)
    if(input3 == "15"){
        document.getElementById('antwoord3').innerHTML = "Juist"
    }else{
        document.getElementById('antwoord3').innerHTML = "Onjuist"
    }
}