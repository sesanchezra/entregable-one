import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

function App() {

  const quoteIndexRandom = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  const createColorRandom = () => {
    return Math.floor(Math.random() * 16777215).toString(16)
  }

  const [quoteRandom, setQuoteRandom] = useState(quotes[quoteIndexRandom(quotes)])

  const [colorRandom, setColorRandom] = useState(createColorRandom());

  const change = () => {
    setQuoteRandom(quotes[quoteIndexRandom(quotes)]);
    setColorRandom(createColorRandom());
  }



  return (
    <div className="App" style={{ backgroundColor: `#${colorRandom}` }}>
      <div className='quote-box'>
        <div className='quote-box-content'>
          <QuoteBox
            quoteRandom={quoteRandom}
            colorRandom={colorRandom}
          />
        </div>
        <div className='quote-btn'>
          <button onClick={change} className='btn-change' style={{backgroundColor: `#${colorRandom}`}}><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
    </div>
  )
}

export default App
