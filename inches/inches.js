"use strict"



document.querySelector('.butt').addEventListener('click', function(){

    const numb = Number(document.querySelector('.info').value);

    const inch2Feet = Math.round( numb * 12 ).toFixed(1) ;
    
    document.querySelector('.result').textContent = inch2Feet ;

    document.querySelector('.inch').textContent = "Inches"
  
})

