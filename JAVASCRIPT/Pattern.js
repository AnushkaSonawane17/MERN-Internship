//Square star pattern
// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=1;j<=4;j++){
//         ptr+="* "
        
//     }
//     ptr+="\n"
// }
// console.log(ptr);

//Pyramid star pattern
// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=1;j<=i;j++){
//         ptr+="* "
//     }
//     ptr+="\n"
// }
// console.log(ptr);

//pryramid reversenode
// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=4;j>=i;j--){
//         ptr+="* ";
//     }
//     ptr+="\n";
// }
// console.log(ptr);

//left pryramid
// var ptr="";
// for(i=1;i<=4;i++){             //for rows
//     for(j=3;j>=i;j--){         //for space which will decrement
//         ptr+=" ";
//     }
//     for(k=1;k<=i;k++){         //for stars
//         ptr+="*"
//     }
// ptr+="\n";
// }
// console.log(ptr);

//Triangle pattern
// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=3;j>=i;j--){
//         ptr+=" ";
//     }
//     for(k=1;k<=i;k++){
//         ptr+="* "
//     }
//     ptr+="\n"
// }
// console.log(ptr);

// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=1;j<=i;j++){
//         ptr+=" ";
//     }
//     for(k=4;k>=i;k--){
//         ptr+="* ";
//     }
//     ptr+="\n";
// }
// console.log(ptr);

//Diamond
// var ptr="";
// for(i=1;i<=6;i++){
//     for(j=6;j>=i;j--){
//         ptr+=" ";
//     }
//     for(k=1;k<=i*2-1;k++){
//         ptr+="* ";
//     }
//     ptr+="\n"
// }
// console.log(ptr);

//hollow square
// var ptr="";
// for(i=1;i<=4;i++){
//     for(j=1;j<=4;j++){
//         if(i==1||i==4||j==1||j==4){
//         ptr+="* "
//         }else{
//             ptr+="";
//         }
//     }
//     ptr+="\n"
// }
// console.log(ptr);

//hollow traingle
//  var ptr="";
// for(i=1;i<=4;i++){
//     for(j=3;j>=i;j--){
//         ptr+=" ";
//     }
//     for(k=1;k<=i;k++){
//         if(i==4||k==1||k==i){
//         ptr+="* "
//         }else{
//             ptr+="  ";
//         }
//     }
//     ptr+="\n"
// }
// console.log(ptr);

//initial
//  var ptr="";
// for(i=1;i<=10;i++){
//     for(j=9;j>=i;j--){
//         ptr+=" ";
//     }
//     for(k=1;k<=i;k++){
//         if(i==6||k==1||k==i){
//         ptr+="* "
//         }else{
//             ptr+="  ";
//         }
//     }
//     ptr+="\n"
// }
//console.log(ptr);

//Name
var ptr="";
for(i=1;i<=5;i++){
    for(j=4;j>=i;j--){
        ptr+=" ";
    }
    for(k=1;k<=i;k++){
        if(i==1||i==3||k==1||k==i)
        ptr+="* "
    else
        ptr+="  "
    }
    ptr+="\n";
}
console.log(ptr);
//For n
// var n="";
// for(i=1;i<=5;i++){
//     for(k=1;k<=i;k++){
//        n+="*" 
//     }
//     for(j=1;j<=5;j++){
//         if(j==5){
//             n+="* "
//         }else{
//             n+="  "
//         }
//     }
//     n+="\n";
    
// }
// console.log(n);

var ptr="";
var n=""
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        if(i==1||j==1||j==i){
        ptr+="* ";
        }else{
            ptr+=" "
        }
    }
        for(k=1;k>=i;k++){
        ptr+=" "
    }
    for(l=4;l>=i;l--){
        if(l==i){
        ptr+="* "
        }else{
            ptr+=" "
        }
    }
}
    ptr+="\n";

    console.log(ptr);
    
// var n="";
// for(h=1;h<=5;h++){
// for(k=1;k>=i;k++){
//         n+=" "
//     }
//     for(l=4;l>=i;l--){
//         if(l==i){
//         n+="* "
//         }else{
//             n+=" "
//         }
//     }
//     ptr+="\n";
// }
//     console.log(n);
    

