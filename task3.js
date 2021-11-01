//Task1
let array = [5, 7, 11, 14, 18, 21, 23, 26];
function arr(){
    let b=array.slice(-1);
    return b;
};
console.log(arr());


//Task2
console.log(array.join());

//Task3
array1= [1,3,5];
array2= [4,6,2];

function arraysSum(arr1, arr2) {
    let sum = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sum.push((arr1[i] || 0) + (arr2[i] || 0));
    }
    return sum;
};

    console.log(arraysSum(array1,array2));


//Task4
let rectangle ={
    width: 4,
    height:2,
    getArea: function(){
        let area = this.width* this.height;
        return area;
    },
    getPerimeter: function(){
        let perimetr = (this.height+this.width)*2;
        return perimetr;
    }
}

console.log(`Perimetr: ${rectangle.getPerimeter()}`);
console.log(`Area: ${rectangle.getArea()}`);