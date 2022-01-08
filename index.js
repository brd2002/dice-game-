var randomnumber1 = Math.ceil(Math.random()*6);
var randomnumerimg = "dice" + randomnumber1 +".png";
var randomimagesource = "images/" +randomnumerimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomimagesource);


var randomumber2 = Math.ceil(Math.random()*6);
var randomnumerimg2 = "dice" + randomumber2 +".png";
var randomimagesource2 = "images/" + randomnumerimg2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomimagesource2);
if (randomnumber1 > randomumber2)
{
    document.querySelector("h1").innerHTML = "1 is win!";
}
else if (randomnumber1 < randomumber2)
{
    document.querySelector("h1").innerHTML = "2 is win!";

}else 
{
    document.querySelector("h1").innerHTML = "Draw!";
}