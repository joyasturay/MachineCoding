import { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion';
function StarRating({ count = 5, value = 0, onChange, size = 28 }) {
  const [hover, setHover] = useState(0)
  const active = hover || value;
  return (
    <div style={{ display: "inline-flex", gap: 4 }}>
      {Array.from({ length: count }, (_, i) => {
        const starValue = i + 1;
        const filled = starValue <= active
        return (
          <span
            key={starValue}
            onClick={() => onChange(starValue)}
            onMouseDown={() => setHover(starValue)}
            onMouseUp={() => setHover(0)}
          style={{color:filled?"#f5b50a":"#cccc",cursor: "pointer",
              fontSize: size,userSelect:'none'}}>
            *

          </span>
        )
        
      })}
   </div>
  )
}

function App() {
  const [rating,setRating] = useState(0)

  return (
    <>
      <div style={{ padding: 24 }}>
      <StarRating value={rating} onChange={setRating} />
      <p>Selected: {rating}</p>
      </div>
      <Accordion/>
    </>
  )
}

export default App
