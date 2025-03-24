let arrayOption = ["👊", "🤚", "✌"];
let randomValue;
let valueSelected;
let valueComputer;
let pointPlayer = 0;
let pointComputer = 0;
let computerIntervalId = setInterval(updateOutputComputer, 333);
let indexOutput = 0;
let draw = "empate";

function random(){
    randomValue = Math.floor(Math.random()*3);
    return randomValue;    
}

function optionSelected(){
    valueSelected = document.querySelector('input[name="option"]:checked').value;
    clearInterval(computerIntervalId);
    valueComputer = arrayOption[random()];
    document.getElementById("valueComputer").innerText = valueComputer;
    if(valueSelected == valueComputer){
        document.getElementById("text").innerText = draw;
        setTimeout(function() {
            computerIntervalId = setInterval(updateOutputComputer, 333);
            
        }, 1500);
        resetRadio();
    }else if((valueSelected == "👊" && valueComputer == "✌")||(valueSelected == "✌" && valueComputer == "🤚")||(valueSelected == "🤚" && valueComputer == "👊")){
        pointPlayer++;
        setTimeout(function() {
            computerIntervalId = setInterval(updateOutputComputer, 333);
            
        }, 1500);
        resetRadio();
        return document.getElementById("playerResult").innerText = pointPlayer;
    }else{
        pointComputer++;
        setTimeout(function() {
            computerIntervalId = setInterval(updateOutputComputer, 333);
            
        }, 1500);
        resetRadio();
        return document.getElementById("computerResult").innerText = pointComputer;
    }
    
}

function updateOutputComputer(){
    valueComputer = arrayOption[indexOutput];
    document.getElementById("valueComputer").innerText = valueComputer;
    if(indexOutput < 2){
        indexOutput++;
    }else{
        indexOutput = 0;
    }
}

function resetRadio() {
    let radios = document.querySelectorAll('input[name="option"]');
    radios.forEach((radio) => {
        radio.checked = false;
    });
}