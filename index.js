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
            const mChoice = document.getElementById("multichoices")
            const choices = document.createElement("li")

            setTimeout(() => {
                console.log(item.question);
                qn.innerText=item.question;
                rightAnswer.innerText = item.correctAnswer

                //getting a list of shuffled multiple questions
                let allAnswers= item.incorrectAnswers
                console.log(allAnswers)

                //including the correct answer
                allAnswers.push(item.correctAnswer)
                const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());
                console.log(shuffledAnswers)

                //assigning the shuflled answers to a list
                mChoice.innerHTML = `<li>${shuffledAnswers[0]}</li>
                <li>${shuffledAnswers[1]}</li>
                <li>${shuffledAnswers[2]}</li>
                <li>${shuffledAnswers[3]}</li>
                `






            }, i * 9000)
            setTimeout(()=>{
                console.log(item.correctAnswer)
                // rightAnswr.innerText = item.correctAnswer
                // rightAnswer.appendChild(rightAnswr)
            },i*6000)

        });
    })
}