let arr1=[10,[20,30],[50.60.[70,80]]];
console.log(arr1[2][2][1]);

let obj1={
    key1:"val1",
    key2:{
        key3:"val3",
        key4:"val4",
    }
}
let{key1,key2:{key3,key4}}=obj1;
console.log(key1);
let[h,...i]=arr1;





