import {useState} from 'react'
import FirmFacts from './components/FirmFacts/FirmFacts'
import './App.scss'

function App() {
  const [showFirmFacts, setShowFirmFacts] = useState(false);
  return (
    <div className="app">
      <section className="app--body">
        { !showFirmFacts &&  <button onClick={() => setShowFirmFacts(true)}> FirmFacts </button>}       
        { showFirmFacts && <FirmFacts onClose={() => setShowFirmFacts(false)} /> }
      </section>
    </div>
  )
}

export default App
