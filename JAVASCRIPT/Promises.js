function search(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            reject("Data not found")},4000)
    })

}
search("Ananya").then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})
console.log("Do other work");
