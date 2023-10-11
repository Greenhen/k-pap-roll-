
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
    document.querySelector('.buttons').style.pointerEvents = 'none';
    setTimeout(function(){document.querySelector('.buttons').style.pointerEvents = 'auto'},2500);
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img0.png";
    setTimeout(function(){
    cpuImage.src = "img/img"+cpu+".png";
    if (cpu === 0) {
        result.innerHTML = 'Draw'
    } else if (cpu === 1){
        result.innerHTML = 'You jerk!'
    } else {
        result.innerHTML = 'You won'
    } 
 },500)
 setTimeout(init,2000)                 //2mp-el az eredmény kihirdetése után nulláz
}

function choosePaper() {
    document.querySelector('.buttons').style.pointerEvents = 'none'
    setTimeout(function(){document.querySelector('.buttons').style.pointerEvents = 'auto'},2500)
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img1.png"
    setTimeout(function(){ 
    cpuImage.src = "img/img"+cpu+".png";
    if (cpu === 1) {
         result.innerHTML = 'Draw'
    } else if (cpu === 2){
         result.innerHTML = 'You jerk!'
    } else {
         result.innerHTML = 'You won'
    }
 },500)
 
 setTimeout(init,2000)
}

function chooseScissor() {
     document.querySelector('.buttons').style.pointerEvents = 'none'
     setTimeout(function(){document.querySelector('.buttons').style.pointerEvents = 'auto'},2500) 
    let cpu = Math.round(Math.random()*2)
    userImage.src = "img/img2.png"
    setTimeout(function(){
         cpuImage.src = "img/img"+cpu+".png";
         if (cpu === 2) {
              result.innerHTML = 'Draw'
          } else if (cpu === 0){
               result.innerHTML = 'You jerk!'
          } else {
               result.innerHTML = 'You won'
          }
          },500)
 setTimeout(init,2000)
}
rock.addEventListener("click", chooseStone);
paper.addEventListener("click", choosePaper);
scissors.addEventListener("click", chooseScissor);



