import React, {useState} from 'react'
import UseEffectCount from './UseEffectCount'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(0)
  return (
    <div>
        <button onClick={() => {setDisplay(!display)}}>Toogle Display</button>
        {display && <UseEffectCount />}
    </div>
  )
}

export default UseEffectCounterContainer