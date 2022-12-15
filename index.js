//category links
const art =  "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=5";
const film = "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=5";
const food = "https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=5";
const general = "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5";
const geography = "https://the-trivia-api.com/api/questions?categories=geography&limit=20";
const history = "https://the-trivia-api.com/api/questions?categories=history&limit=20";
const music = "https://the-trivia-api.com/api/questions?categories=music&limit=20&difficulty=medium";
const science = "https://the-trivia-api.com/api/questions?categories=science&limit=20&difficulty=easy";
const society = "https://the-trivia-api.com/api/questions?categories=society_and_culture&limit=20&difficulty=easy";
const sport = "https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=20&difficulty=easy";
const randomQn = "https://the-trivia-api.com/api/questions";

//getting the specific category menus

const artElem = document.getElementById("art")
const filmElem = document.getElementById("film")
const foodElem = document.getElementById("food")
const generalElem = document.getElementById("general")
const historyElem = document.getElementById("history")
const musicElem = document.getElementById("music")
const scienceElem = document.getElementById("science")
const societyElem = document.getElementById("society")
const sportElem = document.getElementById("sport")

document.addEventListener("DOMContentLoaded",()=>{

    //adding event listers for the various categories
    artElem.addEventListener('click',()=>{
        questionFetch(art)
    })
    filmElem.addEventListener('click',()=>{
        questionFetch(film)
    })
    foodElem.addEventListener('click',()=>{
        questionFetch(food)
    })
    generalElem.addEventListener('click',()=>{
        questionFetch(general)
    })
    historyElem.addEventListener('click',()=>{
        questionFetch(history)
    })
    musicElem.addEventListener('click',()=>{
        questionFetch(music)
    })
    scienceElem.addEventListener('click',()=>{
        questionFetch(science)
    })
    societyElem.addEventListener('click',()=>{
        questionFetch(society)
    })
    sportElem.addEventListener('click',()=>{
        questionFetch(sport)
    })




})


// const configData ={
//     method:"GET"
//     headers:{
//         "Content-Type":"application/json"
//         Accept: "application/json"
//     }
// }

//function for fetching the data and appending it in various html elements

function questionFetch(url){
    fetch(url)
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
                            li.style.backgroundColor = "black"
                            li.style.color = "white"
                        },6000)

                    }
                }


            }, i * 10000)



        });
    })
}