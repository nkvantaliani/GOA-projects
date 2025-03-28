const root = document.querySelector("div");
const api = fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-02-18&sortBy=publishedAt&apiKey=API_KEY")


const render = () => {
    try {
        api
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(`Error: ${err}`))
        
        root.innerHTML = `
            <h1>News</h1>
            <p>${api.message}</p>
        `


    } catch(err) {
        console.error(err)
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()

    render();
})