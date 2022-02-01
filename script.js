const display = document.getElementById("disp-screen");
var isRadian = false;
var isExp = false;
var secondFlag = false;

//Trigonometric Functions

class trig{
    sin(){
        if(!isRadian){
            display.value=Math.sin(display.value*Math.PI/180);
        }
        else{
            display.value=Math.sin(display.value);
        }
    }
    cos(){
        if(!isRadian){
            display.value=Math.cos(display.value*Math.PI/180);
        }
        else{
            display.value=Math.cos(display.value);
        }
    }
    tan(){
        if(!isRadian){
            display.value=Math.tan(display.value*Math.PI/180);
        }
        else{
            display.value=Math.tan(display.value);
        }
    }
    cot(){
        if(!isRadian){
            display.value=Math.cot(display.value*Math.PI/180);
        }
        else{
            display.value=Math.cot(display.value);
        }
    }
    cosec(){
        if(!isRadian){
            display.value=Math.cosec(display.value*Math.PI/180);
        }
        else{
            display.value=Math.cosec(display.value);
        }
    }
    sec(){
        if(!isRadian){
            display.value=Math.sec(display.value*Math.PI/180);
        }
        else{
            display.value=Math.sec(display.value);
        }
    }
}

let trigo = new trig();

//Memory Functions

class M
{
    memory=0;
    mplus()
    {
        this.memory=(Number(this.memory)+Number(display.value)).toString();
        document.getElementById('mc').disabled=false;
        document.getElementById('mr').disabled=false;

    }
    mminus()
    {
        this.memory=(Number(this.memory)-Number(display.value)).toString();
        document.getElementById('mc').disabled=false;
        document.getElementById('mr').disabled=false;
    }
    ms()
    {
        this.memory=display.value;
        document.getElementById('mc').disabled=false;
        document.getElementById('mr').disabled=false;
    }
    mr()
    {
        display.value+=this.memory;
    }
    mc()
    {
        this.memory="";
        display.value=this.memory;
        document.getElementById('mc').disabled=true;
        document.getElementById('mr').disabled=true;
    }
}
var m=new M();

class Function{
    random(){
        if(display.value=='' || isOperator(display.value[display.value.length-1])){
            display.value += Math.random();
        }
    }
    floor(){
        if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
        }
        else{
            display.value = Math.floor(display.value);
        }
    }
    ceiling(){
        if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
        }
        else{
            display.value = Math.ceil(display.value);
        }
    }
}

var fun = new Function();

function updateDisplay(val){
    if(isOperator(display.value[display.value.length-1]) && isOperator(val)){
        
    }
    else{
        display.value+=val;
    }
}
function isOperator(lastch){
    //var lastch = display.value[display.value.length-1];
    if(lastch=='+' || lastch=='-' || lastch=='X' || lastch=='÷' || lastch=='%'){
        return true;
    }
    else{
        return false;
    }
}

function equalsTo(){
    var expr = display.value;
    expr = expr.replaceAll('÷','/');
    expr = expr.replaceAll('X','*');
    expr = expr.replaceAll('^','**');
    try{
        display.value=eval(expr);
    }
    catch(err){
        display.value="Invalid Syntax";
    }
}
function clearScreen(){
    display.value='';
}
function backSpace(){
    display.value=display.value.slice(0,-1);
}
function fact(){
    if(display.value==''){
        display.value=1;
    }
    else{
        if(isOperator(display.value[display.value.length-1])){
        }
        else{
            var prod=1;
            var num = eval(display.value);
            while(num>=1){
                prod *= num;
                num-=1;
            }
            display.value=prod;
        }
    }
}

function deg_rad(){                     //displays which mode is selected
    if(!isRadian){
        elem = document.getElementById('deg_rad');
        elem.innerHTML='RAD';
        isRadian=true;
    }
    else{
        elem = document.getElementById('deg_rad');
        elem.innerHTML='DEG';
        isRadian=false;
    }
}

function toExpo(){                      //convert Number to Exponential Form and vice versa
    if(!isNaN(display.value)  && !isExp){
        display.value = Number(display.value).toExponential();
        isExp=true;
    }
    else if(!isNaN(display.value)  && isExp){
        display.value = Number(display.value).toString();
        isExp=false;
    }
}

function pi(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        display.value+=Math.PI;
    }
}

function e(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        display.value+=Math.E;
    }
}

function absolute(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value = Math.abs(display.value);
    }
}

function inverse(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value = eval('1/'+display.value);
    }
}

function exp(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value = Math.pow(Math.E,eval(display.value));
    }
}

function square(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        if(secondFlag){
            display.value = eval((display.value)+'**3');
        }
        else{
            display.value = eval((display.value)+'**2');
        }
        
    }
}

function squareRoot(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        if(secondFlag){
            display.value = Math.cbrt(eval(display.value));
        }
        else{
            display.value = Math.sqrt(eval(display.value));
        }
        
    }
}

function square_x_y(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value += '^';
    }
}

function tenpowerx(){
    if(isOperator(display.value[display.value.length-1])){
        
    }
    else{
        if(display.value=='')
        {
            display.value=1
        }
        else{
            if(secondFlag){
                display.value = Math.pow(2,display.value);
            }
            else{
                display.value = Math.pow(10,display.value);
            }
        }
    }
}

function logbaseten(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value = Math.log10(display.value)
    }
}

function naturallog(){
    if(display.value=='' || isOperator(display.value[display.value.length-1])){
        
    }
    else{
        display.value = Math.log(display.value)
    }
}

function second(){
    if(!secondFlag){
        document.getElementById('square').innerHTML="x<sup>3</sup>";
        document.getElementById('sqrt').innerHTML="<sup>3</sup>√x";
        document.getElementById('tenpowx').innerHTML="2<sup>x</sup>";
        secondFlag=true;
    }
    else{
        document.getElementById('square').innerHTML="x<sup>2</sup>";
        document.getElementById('sqrt').innerHTML="<sup>2</sup>√x";
        document.getElementById('tenpowx').innerHTML="10<sup>x</sup>";
        secondFlag=false;
    }
}

function signChange(){
    if(isNaN(display.value)){
        display.value='NaN';
    }
    else{
        if(display.value>0){
            display.value='-'+display.value;
        }
        else{
            display.value=display.value.slice(1,display.value.length);
        }
    }
}
clearScreen()
