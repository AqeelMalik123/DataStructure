
// let data=[10,20,30,40,50,60]
// let position=3
// for(let i=3; i<data.length-1;i++){
//     data[i]=data[i+1]
//     data.length=data.length-1
// }
// console.log(data)

// data search structure algorithm
let data=[30,40,60,70,50,80]
let searchNumber=40;
for(let i=0; i<data.length; i++){
    if(data[i]==searchNumber){
        alert(data[i])
    }else {
        return "No Match Found"
    }
}