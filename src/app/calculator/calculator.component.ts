import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  length: number = 0;
  width: number = 0;
  sum: number = 0;
 
  
  operations: any = [
  {label: 'ADD', value: '+' },
  {label: 'MINUS', value: '-' },
  {label: 'DIVIDE', value: '/' },
  {label: 'MULTIPLY', value: '*' },
  {label: 'AREA OF A CICLE', value: 'CircleArea' },
  {label: 'AREA OF A RECTANGLE', value: 'AreaRectangle' },
  ];
  
  selectedOperator: string = '';
  calc(){
  let opVar = this.selectedOperator;
  let retVal: number = 0;
  switch(opVar){
  case '+':
    retVal = Number(this.num1) + Number(this.num2);
    break;
  case '-':
    retVal = Number(this.num1) -  Number(this.num2);
    break;
  case '*':
    retVal = Number(this.num1) * Number(this.num2);
    break;
  case '/':
    retVal = Number(this.num1) / Number(this.num2);
    break;
  case 'CircleArea':
    retVal = Number(this.num1 * this.num1) * Number(3.14);                     
    break;
  case 'AreaRectangle':
    retVal = Number(this.num1) * Number(this.num2);
    break;
  
    default:
      retVal = 0;
  }
  this.sum = retVal;
  }
}
