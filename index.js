var n = Math.random();
n = n*6;
n = Math.floor(n)+1;

var randomnumber = "dice" + n + ".png";
var randomimgsource  = "images/" + randomnumber;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsource);


var m = Math.random();
m = m*6;
m = Math.floor(m)+1;

var randomnumber2 = "dice" + m + ".png";
var randomimgsource2  = "images/" + randomnumber2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsource2);

if(randomnumber > randomnumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomnumber < randomnumber2) 
{
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "🏳️Draw!"
}
