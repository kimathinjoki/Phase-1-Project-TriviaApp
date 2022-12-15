document.addEventListener("DOMContentLoaded",()=>{
    questionFetch()



})

const randomQn = "https://the-trivia-api.com/api/questions";
// const configData ={
//     method:"GET"
//     headers:{
//         "Content-Type":"application/json"
//         Accept: "application/json"
//     }
// }

function questionFetch(){
    fetch(randomQn)
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        data.forEach(item => {
            console.log(item.question)

        });
    })
}