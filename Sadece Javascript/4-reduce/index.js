function myReduce(array,callback,initialValue){
    
    if(Array.isArray(array)){
        let akumulator;
        if(initialValue===undefined){//initialValue girilmemiş ise  
            akumulator=array[0];
            array.slice(0);//ilk elemanı çıkardım.
            //pure impure. Herzaman fonksiyonlarımız pure olmadlı bir şeyi değiştirmemeli

        }
        else{//initial value girilmiş ise
            akumulator=initialValue;
        }
        array.forEach((item) => {
            akumulator=callback(item,akumulator);
        });
        return akumulator;
    }
    else{
        console.log("Lütfen argüman olarak bir array giriniz.");
        return 0;
    }
}
function add(a,b){
    return a+b;
}
const nums=[4,3,10];
let notArray=0;
const sehirler=["Yalova","Bursa"];
const b=sehirler.slice();
console.log(b);
let value=myReduce(sehirler,add);
console.log(value);

console.log(sehirler);


let nums2 = [1, 35, 21, 434];
let result=nums2.reduce(function(akumulator,currentValue){
    return akumulator+initialValue;
},0);

console.log(result);