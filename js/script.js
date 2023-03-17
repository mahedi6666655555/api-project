let loddatas=()=>{
    let url=`https://jsonplaceholder.typicode.com/users`
    fetch(url)
    .then(res=>res.json())
    .then((data)=>showData(data))
}

let showData=(phones)=>{

    let get1=document.getElementById("container")
console.log(phones);
    

    for(let mahedi of phones ){
        

    let create=document.createElement("div")
    


    create.innerHTML=   `
    <h1>${mahedi.id}</h1>
    <h1>${mahedi.name}</h1>
    <h1>${mahedi.username}</h1>
    <h1>${mahedi.email}</h1>

    
    
    `;
    get1.appendChild(create)

    }


}


loddatas()