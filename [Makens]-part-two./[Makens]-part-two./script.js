let eventType = window.prompt("What type of event are you going to? (casual, semi-formal or formal)"); 
let tempFahr = window.prompt("What is will the temperature be in Fahrenheit?");
let result = "" ;

if (eventType == "casual") {
    if (tempFahr < 54) {
        result = "Since it is " + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear something comfy and a coat. ';
    }    else if (54 < tempFahr < 70) { 
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear something comfy and a jacket. ';
    } else if (tempFahr>70) {
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear something comfy and no jacket. ';
    } 
}
else if (eventType == "semi-formal") {
    if (tempFahr < 54){
        result = 'Since it is ' + tempFahr + ' degress and you are going to a ' + eventType + ' event, you should wear a polo and a coat. ';
    }    else if (54 < tempFahr < 70) { 
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear a polo and a jacket. ';
    } else if (tempFahr>70) {
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear a polo and no jacket. ';
    }
}
    else if (eventType == "formal") {
        if (tempFahr < 54){
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear a suit and a coat. ';
    }    else if (54 < tempFahr < 70) { 
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear a suit and a jacket. ';
    } else if (tempFahr>70) {
        result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear a suit and no jacket. ';
    } 
    }
    console. log(result);