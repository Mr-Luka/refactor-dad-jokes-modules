

// Named export (we can have lots of these)
export async function fetchJoke(loader) {
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