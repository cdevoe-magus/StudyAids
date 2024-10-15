'use strict';

console.log('Hello world');

let truePos = 0;
let trueNeg = 0;
let falsePos = 0;
let falseNeg = 0;

let acc = 0;
let prec = 0;
let recall = 0;
let f1 = 0;

function generate(button) {
    console.log(button.parentNode.childNodes);
    let matTab = button.parentNode.childNodes[3].childNodes[1];
    console.log(matTab);
    let calcTab = button.parentNode.childNodes[5].childNodes[1];
    console.log(calcTab);
    console.log(calcTab.childNodes);
    //for (let i = 0; i < calcTab.childNodes.length; i++) {
      //  calcTab.childNodes[i].hidden = true;
    //}
    calcTab.childNodes[0].hidden = true;
    calcTab.childNodes[2].hidden = true;
    calcTab.childNodes[4].hidden = true;
    calcTab.childNodes[6].hidden = true;

    truePos = Math.ceil(Math.random() * 10000);
    trueNeg = Math.ceil(Math.random() * 10000);
    falsePos = Math.ceil(Math.random() * 10000);
    falseNeg = Math.ceil(Math.random() * 10000);
    console.log(matTab.childNodes[4].childNodes);
    matTab.childNodes[4].childNodes[3].innerHTML = truePos;
    matTab.childNodes[4].childNodes[5].innerHTML = falsePos;
    matTab.childNodes[6].childNodes[3].innerHTML = falseNeg;
    matTab.childNodes[6].childNodes[5].innerHTML = trueNeg;

    acc = (truePos + trueNeg) / (truePos + trueNeg + falsePos + falseNeg)*100;
    prec = truePos / (truePos + falsePos)*100;
    recall = truePos / (truePos + falseNeg)*100;
    f1 = 2 * prec * recall / (prec + recall)/100;

    console.log(calcTab.childNodes);
    if (Math.round(Math.random()) > 0) {
        calcTab.childNodes[0].childNodes[3].innerHTML = "calculate";
        calcTab.childNodes[0].hidden = false;
    }
    if (Math.round(Math.random()) > 0) {
        calcTab.childNodes[2].childNodes[3].innerHTML = "calculate";
        calcTab.childNodes[2].hidden = false;
    }
    if (Math.round(Math.random()) > 0) {
        calcTab.childNodes[4].childNodes[3].innerHTML = "calculate";
        calcTab.childNodes[4].hidden = false;
    }
    if (Math.round(Math.random()) > 0 ) {
        calcTab.childNodes[6].childNodes[3].innerHTML = "calculate";
        calcTab.childNodes[6].hidden = false;
    }
    //for (let i = 0; i < calcTab.childNodes.length; i+2) {
        //if (Math.round(Math.random()) > 0) {
           // calcTab.childNodes[i].childNodes[3].innerHTML = "calculate";
          //  calcTab.childNodes[i].hidden = false;
       // }
   // }
}

function reveal(button) {
    let calcTab = button.parentNode.childNodes[5].childNodes[1];
    //calcTab.childNodes[0][1].innerHTML = acc;
   // calcTab.childNodes[1][1].innerHTML = prec;
    //calcTab.childNodes[2][1].innerHTML = recall;
    //calcTab.childNodes[3][1].innerHTML = f1;
    if (!calcTab.childNodes[0].hidden) {
        calcTab.childNodes[0].childNodes[3].innerHTML = acc;
    }
    if (!calcTab.childNodes[2].hidden) {
        calcTab.childNodes[2].childNodes[3].innerHTML = prec;
    }
    if (!calcTab.childNodes[4].hidden) {
        calcTab.childNodes[4].childNodes[3].innerHTML = recall;
    }
    if (!calcTab.childNodes[6].hidden) {
        calcTab.childNodes[6].childNodes[3].innerHTML = f1;
    }
}
