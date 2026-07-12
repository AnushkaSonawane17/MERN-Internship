//forEach syntax:
//      arr.forEach((val(to print valueof array), index(to print index of value),arr1(to print whole array))=>{
        //code
//      })

// let arr=[1,2,3,4];
// arr.forEach((val, index, arr1)=> {
//     if(val%2==0){
//         console.log(val,index,arr1);
        
//     }
// });

// let array=[1,2,3,4,5,6,7,8];
// var sum=0;
// array.forEach((val)=>{
//     if(val%2==0){
//         sum=sum+val;
//     }
// })
// console.log(sum);


// let arr=[1,2,3,4,5,6];
// let newarr=arr.map(val=> val*3);
// let oddarr=newarr.filter((val)=>{return val%2!=0});
// let mul=arr.reduce((current,next)=>{return current*next});
// console.log(arr);
// console.log(newarr);
// console.log(oddarr);
// console.log(mul);

let arr=[1,2,3,4,5];
let mul=arr.map(val=>val*3).filter(val=>val%2!=0).reduce((c,n)=>c*n);
console.log(mul);
