import Header from "./components/Header"

const App = document.getElementById("app")

function App() {
    return `
        ${Header()}
    `
};

app.innerHTML = App();