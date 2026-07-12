function getUser(id){
    return new Promise((res,rej)=>{
       if(id<=10){
        res("User of id="+id+"found");
       }else{
        rej("User not found");
       }
    })
}
async function  fetchData(){
    try{
        const data=await getUser(30);
        console.log(data);
    }catch(err){
        console.log(err);
        
    }
}