'use strict'

// const bmi = weight / (height * height);




document.querySelector('.check').addEventListener('click', function(){
        console.log('it works');

        const weight = Number(document.querySelector('.calcweight').value);

        const height = Number(document.querySelector('.calcheight').value);
        console.log(height,'This is height')

        let bmi = Math.round(weight / (height * height) *703).toFixed(1);

        if (bmi <= 18.5){
        document.querySelector('.results').textContent = bmi;
        document.querySelector('html').style.backgroundColor = '#53B8BB';
        document.querySelector('.resulttext').textContent = "You are underweight";
        } else if (bmi <= 24.9 && bmi >= 18.5) {
            document.querySelector('html').style.backgroundColor = '#61B15A';
            document.querySelector('.resulttext').textContent = "You are normal";

        } else if (bmi >= 25 && bmi <=29.9 ){
            document.querySelector('html').style.backgroundColor = '#FFED99';
            document.querySelector('.resulttext').textContent = "You are overwieght";

        } else if (bmi >= 30 && bmi <= 34.9){
            document.querySelector('html').style.backgroundColor = '#FF7600';
            document.querySelector('.resulttext').textContent = 'You are obese';

        } else if(bmi >=35){
            document.querySelector('html').style.backgroundColor = '#FF4848';
            document.querySelector('.resulttext').textContent = 'you are extremely obese';

        } else {
            document.querySelector('.resulttext').textContent = 'Enter yourt numbers';

        }

        document.querySelector('.results').textContent = bmi;

    
})

