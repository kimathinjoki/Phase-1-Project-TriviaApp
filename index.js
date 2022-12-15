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
        data.forEach((item,i)=> {
            // console.log(item.question)
            const qn = document.getElementById("question")
            const rightAnswer = document.getElementById("answer")
            // const rightAnswr = document.createElement("li")

            setTimeout(() => {
                console.log(item.question);
                qn.innerText=item.question;
                rightAnswer.innerText = item.correctAnswer
                // rightAnswer.appendChild(rightAnswr)

            }, i * 9000)
            setTimeout(()=>{
                console.log(item.correctAnswer)
                // rightAnswr.innerText = item.correctAnswer
                // rightAnswer.appendChild(rightAnswr)
            },i*6000)

        });
    })
}