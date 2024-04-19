import FirmFacts from './components/FirmFacts/FirmFacts'
import './App.scss'

function App() {
  return (
    <div className="app">
      <header className="app--header">
        <div className="close-button">
          <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="42" y2="42" stroke="white" strokeWidth="1"/>
            <line x1="42" y1="2" x2="2" y2="42" stroke="white" strokeWidth="1"/>
          </svg>
        </div>
        <div className="app--title">Firm Facts</div>
        <div className="app--container">
          <div className="app--container--line"></div>
        </div>
      </header>
      <section className="app--body">
        <FirmFacts />
      </section>
    </div>
  )
}

export default App
