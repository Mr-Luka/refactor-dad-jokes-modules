const jokeButton = document.querySelector(".getJoke");
const jokeButtonSpan = jokeButton.querySelector(".jokeText");
const jokeHolder = document.querySelector(".joke p");
const loader = document.querySelector(".loader")

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
    // Turn loader on
    loader.classList.remove("hidden");
    const response = await fetch("https://icanhazdadjoke.com", 
    { headers: 
        {Accept: 'application/json'}});
    //turning it into something that is readable
    const data = await response.json()
    // Turn the loader off
    loader.classList.add("hidden");
    jokeButton.classList.remove("hidden");

    return data;
}
// utility function
function randomItemFromArray(arr, not){
    const item = arr[Math.floor(Math.random()*arr.length)];
    // If statement for in case if the textButton repeats right after another one, to stop
    // it from happening
    if (item === not) {
        console.log("aaa we used that one last time, look again")
        return randomItemFromArray(arr, not);
    }
    return item;
}

async function handleClick(){
    const {joke} = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}

jokeButton.addEventListener("click", handleClick)