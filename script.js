
 let userBox = document.querySelector('#user');
let userImage = document.createElement('img');
userBox.appendChild(userImage);

let cpuBox = document.querySelector("#cpu");
let cpuImage = document.createElement("img");
cpuBox.appendChild(cpuImage);
let result = document.querySelector('#result');  //nullázáshoz létrehozott változó


function init(){                   //nullázza az értékeket
  cpuImage.src="";
  userImage.src="";
  result.innerHTML="";
  
}


function chooseStone() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img0.png";
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
    if (cpu === 0) {
        result.innerHTML = 'Döntetlen'
    } else if (cpu === 1){
        result.innerHTML = 'Csicska vagy!'
    } else {
        result.innerHTML = 'Nyertél'
    } 
 },500)
 setTimeout(init,2000)                 //2mp-el az eredmény kihirdetése után nulláz
}

function choosePaper() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img1.png"
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
    if (cpu === 1) {
         result.innerHTML = 'Döntetlen'
    } else if (cpu === 2){
         result.innerHTML = 'Csicska vagy!'
    } else {
         result.innerHTML = 'Nyertél!'
    }
 },500)
 setTimeout(init,2000)
}

function chooseScissor() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img2.png"
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
    if (cpu === 2) {
         result.innerHTML = 'Döntetlen'
    } else if (cpu === 0){
         result.innerHTML = 'Csicska vagy!'
    } else {
         result.innerHTML = 'Nyertél'
    }
 },500)
 setTimeout(init,2000)
}
stone.addEventListener("click", chooseStone);
paper.addEventListener("click", choosePaper);
scissor.addEventListener("click", chooseScissor);



