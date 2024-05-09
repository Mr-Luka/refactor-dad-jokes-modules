// Named export
export async function handleClick(){
    const {joke} = await fetchJoke(loader);
    jokeHolder.textContent = joke;
    jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}