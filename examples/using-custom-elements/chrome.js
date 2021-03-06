const Tram = require('../../tram-one')

const footer = require('./footer')
const html = Tram.html({
  footer
})

module.exports = (attrs, children) => {
  const style = 'padding: 2em'
  return html`
    <div>
      <h1>Tram-One 🚋</h1>
      <div style=${style}>
        ${children}
      </div>
      <footer />
    </div>
  `
}
