const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
     if(internship){
         resolve ("I made it");
     }
     else{
        reject("I will try harder")
     }
})
ourPromise.then((response)=>{
    console.log({response});
    console.log("I will continue working hard");
})
// .catch-rejected
// .then-resolved
// .finally- both resolved and rejected
.catch((error)=>{
    console.log({error});
    console.log("I will continue applying for jobs");
})
.finally(()=>{
    console.log("I will be a software engineer");
})
console.log({ourPromise});
// asynchronous functions return promises
// they wait for promises to either be rejected or resolved
// const add =async ()=>{
// }
async function myAkiraChixDream(){
    try{
    console.log("This is my dream");
    await ourPromise;
    }
    catch{
        console.log("Our dream is not yet successful");
    }
}
myAkiraChixDream();
// try-if resolved
// catch- if rejects
// to solve for errors incase of anything, use try and catch