//buzigeci
 let userBox = document.querySelector('#user');
let userImage = document.createElement('img');
userBox.appendChild(userImage);

let cpuBox = document.querySelector("#cpu");
let cpuImage = document.createElement("img");
cpuBox.appendChild(cpuImage);

function chooseStone() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img0.png";
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
  },500)
    console.log(cpu);
    if (cpu === 0) {
        let result = document.querySelector('#result').innerHTML = 'Döntetlen'
    } else if (cpu === 1){
        let result = document.querySelector('#result').innerHTML = 'Csicska vagy!'
    } else {
        let result = document.querySelector('#result').innerHTML = 'Nyertél'
    }   
}

function chooseStone1() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img1.png"
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
  },500)
    if (cpu === 1) {
        let result = document.querySelector('#result').innerHTML = 'Döntetlen'
    } else if (cpu === 2){
        let result = document.querySelector('#result').innerHTML = 'Csicska vagy!'
    } else {
        let result = document.querySelector('#result').innerHTML = 'Nyertél!'
    }
}

function chooseStone2() {
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img2.png"
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
  },500)
    if (cpu === 2) {
        let result = document.querySelector('#result').innerHTML = 'Döntetlen'
    } else if (cpu === 0){
        let result = document.querySelector('#result').innerHTML = 'Csicska vagy!'
    } else {
        let result =  document.querySelector('#result').innerHTML = 'Nyertél'
    }
}
stone.addEventListener("click", chooseStone);
paper.addEventListener("click", chooseStone1);
scissor.addEventListener("click", chooseStone2);



