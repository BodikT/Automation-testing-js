//Task1
let task1 = (string)=>{
if (string.indexOf('first') > -1){
    console.log("world exist");
}else{
    console.log("dont exist");
}
};

console.log(task1("first task"));

//Task2
let task2 = (string) => {
    if(string === ""){
        console.log("string is empty");
    }else{
        console.log("string exist ");
    }
}; 

console.log(task2("test"));


//Task4
let task4 = (x,y) =>{
    if(x>y){
        return x;
    }else{
        return y;
    }};

console.log(task4(14,4));

//Task5
let task5 = (x,y,z) => {
    if (x>y && x>z){
        if (y>z){
            console.log(x + ", " + y + ", " +z);
    }else{
            console.log(x + ", " + z + ", " +y);
        }
}
    else if (y>x && y >z)
{
        if (x>z){
             console.log(y + ", " + x + ", " +z);
        }else{
             console.log(y + ", " + z + ", " +x);
        }
}   else if (z>x && z>y){
        if (x>y){
            console.log(z + ", " + x + ", " +y);
        }
    else
        {
            console.log(z + ", " + y + ", " +x);
        }
}        

}

console.log(task5(11,2,8));

