$(document).ready(function(){
    $(".menu").click(function(){
      $("nav").toggle();
    });
  });

  var hinh=[
    'img/town.jpg',
    'img/mountain1.jpg',
    'img/mountain2.jpg',
];

var index = 0;
function prev()
{
  index--;
  if(index < 0) index = hinh.length-1;
  document.getElementById('banner').src = hinh[index];
  document.getElementById('0').style.color = 'white';
  document.getElementById('1').style.color = 'white';
  document.getElementById('2').style.color = 'white';
  document.getElementById(index).style.color='#1598d4';
}

function next()
{
  index++;
  if(index == hinh.length) index = 0;
  document.getElementById('banner').src = hinh[index];
  document.getElementById('0').style.color = 'white';
  document.getElementById('1').style.color = 'white';
  document.getElementById('2').style.color = 'white';
  document.getElementById(index).style.color='#1598d4';
}

setInterval('next()', 2000);

//Image model
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//choose color
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click', function(){
    root.style.setProperty('--color2', '#11009E');
    localStorage.setItem('pickColor', '#11009E');
});
c2.addEventListener('click', function(){
  root.style.setProperty('--color2', '#4942E4');
  localStorage.setItem('pickColor', '#4942E4');
});
c3.addEventListener('click', function(){
  root.style.setProperty('--color2', '#8696FE');
  localStorage.setItem('pickColor', '#8696FE');
});

function loadTheme(){
  if( localStorage.getItem('pickColor')!==''){
    root.style.setProperty('--color2', localStorage.getItem('pickColor'));
  }
}