const home = document.getElementById('home')
const explorer = document.getElementById('explorer')
const universe = document.getElementById('universe')



const routes = {
    "/": "pages/home.html",
    "/explorer": "pages/explorer.html",
    "/universe": "pages/universe.html"
}

function router(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)


    handle()

}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname]

    fetch(route)
        .then(data => data.text())
        .then(html => document.querySelector('main').innerHTML = html)
}

home.addEventListener('click', () => {
    document.documentElement.classList.add('home')
    document.documentElement.classList.remove('explorer')
    document.documentElement.classList.remove('universe')
})

explorer.addEventListener('click', () => {
    document.documentElement.classList.remove('home')
    document.documentElement.classList.add('explorer')
    document.documentElement.classList.remove('universe')
})

universe.addEventListener('click', () => {
    document.documentElement.classList.remove('home')
    document.documentElement.classList.remove('explorer')
    document.documentElement.classList.add('universe')
})