const App = require("./src/app")

const app = new App()

app.app.listen(8000, () => console.log("Сервер запущен"))