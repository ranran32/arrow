class arrow {
    constructor () {
        this.num1= 0;
        this.num2= 0;
        this.resultAdd=document.getElementById('resultAdd');
        this.resultSub=document.getElementById('resultSub');
        this.resultMul=document.getElementById('resultMul');
        this.resultDiv=document.getElementById('resultDiv');
        this.btn= document.getElementById('btn');
        this.btn.addEventListener('click',this.calculate);
    }
    addition = () => {
        this.num1= parseFloat(document.getElementById('input1').value);
        this.num2= parseFloat(document.getElementById('input2').value);
        return this.num1 + this.num2;
    }
    substraction = () => {
        this.num1= parseFloat(document.getElementById('input1').value);
        this.num2= parseFloat(document.getElementById('input2').value);
        return this.num1 - this.num2;
    }
    multiplication = () => {
        this.num1= parseFloat(document.getElementById('input1').value);
        this.num2= parseFloat(document.getElementById('input2').value);
        return this.num1 * this.num2;
    }
    division = () => {
        this.num1= parseFloat(document.getElementById('input1').value);
        this.num2= parseFloat(document.getElementById('input2').value);
        return this.num1 / this.num2;
    }
    calculate= () => {
        const sum= this.addition();
        this.resultAdd.textContent= `The sum is ${sum}`;
        const difference= this.substraction();
        this.resultSub.textContent= `The difference is ${difference}`;
        const factor= this.multiplication();
        this.resultMul.textContent=`The factor is ${factor}`;
        const qoutient= this.division();
        this.resultDiv.textContent= `The qoutient is ${qoutient.toFixed(2)}`;
    }
    
}

const arrow1= new arrow ();