const Tram = require('../../tram-one')
const app = new Tram()
const html = Tram.html()
const home = () => html`
  <div>
    <h1>This is the Home Page</h1>
    <div> This is rendered on a server, and then served up to you! </div>
    <div> We also have a number page here: <a href="/number">/number</a> </div>
  </div>
`
const num = (state, actions) => {
  const onNewNumber = () => {
    actions.newNumber()
  }
  return html`
    <div>
      <h1>This is a Number Page</h1>
      <div> This is rendered on a server, and then served up to you! </div>
      <div> We can even take in stuff from the server, like this number: ${state.number} </div>
      <button onclick=${onNewNumber}> Generate New Number </button>
    </div>
  `
}

app.addRoute('/', home)
app.addRoute('/number', num)

module.exports = app
