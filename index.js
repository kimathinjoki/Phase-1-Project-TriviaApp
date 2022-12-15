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
                // rightAnswer.innerText = item.correctAnswer

                //getting a list of shuffled multiple questions
                let allAnswers= item.incorrectAnswers
                console.log(allAnswers)

                //including the correct answer to the multiple question and shufle the list
                allAnswers.push(item.correctAnswer)
                const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());
                console.log(shuffledAnswers)

                //assigning the shuflled answers to a html list
                mChoice.innerHTML = `<li class="answerList">${shuffledAnswers[0]}</li>
                <li class="answerList">${shuffledAnswers[1]}</li>
                <li class="answerList">${shuffledAnswers[2]}</li>
                <li class="answerList">${shuffledAnswers[3]}</li>
                `
                // assigning the correct answer after a duration
                for(const li of document.querySelectorAll(".answerList")){
                    if(li.textContent.includes(item.correctAnswer)){
                        setTimeout(()=>{
                            li.style.backgroundColor = "green"
                        },6000)

                    }
                }


            }, i * 10000)



        });
    })
}