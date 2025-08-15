let calculate = document.querySelector("#calculate");

calculate.addEventListener('click', () => {
    let totalbill = document.querySelector('#totalBill').value;
    let tipPERCENT = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

     //validator
     if(totalbill === ''|| tipPERCENT == '' || split == ''){
          alert('Please enter values');
          return;
     }

     let total = (totalbill * tipPERCENT) / split;
     total = total.toFixed(2);
     console.log()

     document.getElementById('tip').innerHTML = total

})