
function ButtonClick1() {
    console.log("Button is Clicked");
}

function ButtonClick2() {
    console.log("Button 2 is Clicked");
}

function ButtonClick3() {
    console.log("Button 3 is Clicked");
}

//second example of Function linked to button
var button2=document.getElementById("button2");

button2.addEventListener("click",ButtonClick2);

//Third Example
var button3=document.getElementById("button3");
button3.onclick=ButtonClick3;


//Anonymous Function 

var button4=document.getElementById("button4");
button4.onclick=function () {
    console.log("Button4 -Anonymous Function");
};

//Anonymous Function Example Using Event Listener
var button5=document.getElementById("button5");

button5.addEventListener("click",function () {
    console.log("Button5- Anonymous Using Event Listener");
});

//Function created using variable
var ButtonClick6=function () {
  console.log("Button 6 is Clicked");
};

var button6=document.getElementById("button6");
button6.onclick=ButtonClick6;


// Arrow Function
var ButtonClick7= () => {
    console.log("Button 7 is Clicked Arrow Function");
};

var button7=document.getElementById("button7");
button7.onclick=ButtonClick7;


//JavaScript Function Without Passing Any Argument But Expecting Argument
function AddNo(a,b) {
    console.log("Value of A : "+a);
    console.log("Value of B : "+b);

}

var button8=document.getElementById("button8");
button8.onclick=function () {
    AddNo(10)
};

//JS Function With default value in Argument/parameter
function Subtract(a=5,b=10) {
    console.log("Value of A : "+a);
    console.log("Value of B : "+b);

}

var button9=document.getElementById("button9");
button9.onclick=function () {
    Subtract();
    Subtract(10,20);
};



//Function With Argument Array
function SumOfNum(a) {
    var sum=0;
    for(var key in a){
        sum+=a[key];
    }

    console.log(sum);
}

var button10=document.getElementById("button10");
button10.onclick=function () {
 SumOfNum([10,20,30,5,8]);
};



//Creating Function Accessing arguments Keyword Data
// arguments is global object inside function scope which hold all the value in array which we pass in function
function SumOfNum3() {
    console.log(arguments);
    var sum=0;
    for(var key in arguments){
        sum+=arguments[key];
    }

    console.log(sum);
}

var button12=document.getElementById("button11");
button12.onclick=function () {
    SumOfNum3(10,20,30,5,8);
};



//Function Inside Function
function SumOfNum4(...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    console.log(sum);
}

var button13=document.getElementById("button12");
button13.onclick=function () {
    SumOfNum4(10,20,30,5,8,"ABC");
};




//JavaScript Callback Function
function SumOfNum5(cb,...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    cb(sum);
}

function PrintResult(value) {
    console.log("Sum of Number is "+value);
}

function PrintResult2(value) {
    console.log("Sum of Number 2 is "+value);
}

var button14=document.getElementById("button13");
button14.onclick=function () {
    SumOfNum5(PrintResult2,10,20,30,5,8,"ABC");
};



//JavaScript bind method in function
//bind assingn parameter in function before calling it
function SumOfNum6(cb,...a) {

    function validateNum(num){
        return isNaN(num) ? 0 :num;
    }

    console.log(a);
    var sum=0;
    for(var key in a){
        sum+=validateNum(a[key]);
    }

    cb(sum);
}

function PrintResult3(message,message2,value) {
    console.log(message+""+message2+""+value);
}

var button15=document.getElementById("button14");
button15.onclick=function () {
    SumOfNum5(PrintResult3.bind(this,"Sum of Number : ","is"),10,20,30,5,8,"ABC");
};



var arrow_with_arg1=(value1)=>{
    console.log("Arrow with Parameter "+value1);
};

var arrow_with_arg2 = value1 =>{
    console.log("Arrow with Parameter "+value1);
};

//Multiple Argument in Arrow Function
var arrow_with_arg3 = (value1,value2) =>{
    console.log("Arrow with Parameter "+value1+" Value 2 : "+value2);
};

arrow_with_arg1(50);
arrow_with_arg2(60,71);
arrow_with_arg3(60,71);