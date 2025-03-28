const root = document.querySelector("div");
const api = fetch("https://randomuser.me/api/")

const render = () => {
    try {
        api
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(`Error: ${err}`))

        api.results.forEach(element => {
            root.innerHTML = `
                <p>Gender: ${element}</p>
                <p>Name: ${element}</p>
                <p>Last name: ${element}</p>
            `
        });

    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()

    render()
})