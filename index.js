const result = document.getElementById("result");
const author = document.getElementById("author");

var array = [1,2,3,4,5];

function generate()  {
    
    let num = [Math.floor(Math.random() * array.length)]
    
    if (num == 1){
        result.innerHTML = '“If life were predictable it would cease to be life, and be without flavor.”';
        author.innerHTML = '– Elanor Roosevelt';
    }
    else if (num == 2){
        result.innerHTML = "“Life is what happens when you're busy making other plans.”";
        author.innerHTML = '– John Lennon';
    }
    else if (num == 3){
        result.innerHTML = " “When you reach the end of your rope, tie a knot in it and hang on.”";
        author.innerHTML = '- Franklin D. Roosevelt';
    }
    else if (num == 4){
        result.innerHTML = " “Always remember that you are absolutely unique. Just like everyone else.”";
        author.innerHTML = '– Margaret Mead';
    }
    else if (num == 5){
        result.innerHTML = "“The way to get started is to quit talking and begin doing.”";
        author.innerHTML = '– Walt Disney';
    }
  }









