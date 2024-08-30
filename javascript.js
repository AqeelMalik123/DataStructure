
let data=[10,20,30,40,50,60]
let position=3
for(let i=3; i<data.length-1;i++){
    data[i]=data[i+1]
    data.length=data.length-1
}
console.log(data)