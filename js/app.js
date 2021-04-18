'use strict';

let firstImage = document.getElementById('img1');
let secImage = document.getElementById('img2');
let thrdImage = document.getElementById('img3');

let theCount = 0;
let maxAttempts = 25;
let agree = confirm('Do you agree to vote for 25 rounds?');
if (agree) {
  // continue
}else{
  maxAttempts=parseInt(prompt('Enter the number of rounds you would like to take'));
}
let firstIndex;
let secIndex;
let thrdIndex;

function Product(name,path){
  this.name= name;
  this.path = path;
  this.votes = 0;
  this.timeShown=0;
  Product.allImages.push(this);
}
Product.allImages =[];

new Product('bag','../img/bag.jpg');
new Product('banana','../img/banana.jpg');
new Product('bathroom','../img/bathroom.jpg');
new Product('boots','../img/boots.jpg');
new Product('breakfast','../img/breakfast.jpg');
new Product('bubblegum','../img/bubblegum.jpg');
new Product('chair','../img/chair.jpg');
new Product('cthulhu','../img/cthulhu.jpg');
new Product('dog-duck','../img/dog-duck.jpg');
new Product('dragon','../img/dragon.jpg');
new Product('pen','../img/pen.jpg');
new Product('pet-sweep','../img/pet-sweep.jpg');
new Product('scissors','../img/scissors.jpg');
new Product('shark','../img/shark.jpg');
new Product('sweep','../img/sweep.png');
new Product('tauntaun','../img/tauntaun.jpg');
new Product('unicorn','../img/unicorn.jpg');
new Product('water-can','../img/water-can.jpg');
new Product('wine-glass','../img/wine-glass.jpg');
new Product('usb','../img/usb.gif');
console.log(Product.allImages);

function randomIndex(){
  return Math.floor(Math.random() * Product.allImages.length);
}

function renderImages(){
  firstIndex=randomIndex();
  secIndex=randomIndex();
  thrdIndex=randomIndex();

  while (firstIndex===secIndex || firstIndex===thrdIndex || secIndex===thrdIndex) {
    firstIndex=randomIndex();
    secIndex=randomIndex();
  }
  firstImage.src=Product.allImages[firstIndex].path;
  secImage.src=Product.allImages[secIndex].path;
  thrdImage.src=Product.allImages[thrdIndex].path;
  Product.allImages[firstIndex].timeShown++;
  Product.allImages[secIndex].timeShown++;
  Product.allImages[thrdIndex].timeShown++;

}
renderImages();

firstImage.addEventListener('click', byClicking);
secImage.addEventListener('click', byClicking);
thrdImage.addEventListener('click', byClicking);
function byClicking(event){
  theCount++; //0 11
  if(theCount <= maxAttempts){
    if(event.target.id ==='img1'){
      Product.allImages[firstIndex].votes++;
    }else if(event.target.id ==='img2'){
      Product.allImages[secIndex].votes++;
    }else if(event.target.id ==='img3'){
      Product.allImages[thrdIndex].votes++;
    }
    renderImages();
    console.log(Product.allImages);
  }else {
    firstImage.removeEventListener('click', byClicking);
    secImage.removeEventListener('click', byClicking);
    thrdImage.removeEventListener('click', byClicking);
  }
}

function renderList(){
  let uList = document.getElementById('uolist');
  for(let i = 0 ; i < Product.allImages.length;i++){
    let liElement = document.createElement('li');
    uList.appendChild(liElement);
    liElement.textContent = `${Product.allImages[i].name} had ${Product.allImages[i].votes} votes, seen ${Product.allImages[i].timeShown} times.`;
  }
}

let renderResulte=document.getElementById('renderResulte');
renderResulte.addEventListener('click', renderList);
