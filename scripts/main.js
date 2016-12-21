var myHeading = document.querySelector('h1');
myHeading.textContent = 'Raymond Xu';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/latte.png') {
      myImage.setAttribute ('src','images/latte2.jpg');
    } else {
      myImage.setAttribute ('src','images/latte.png');
    }
}