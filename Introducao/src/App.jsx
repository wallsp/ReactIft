import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PrimeiroComponente from './assets/componentes/PrimeiroComponente'

// 3- Importando TemplatsExpressions
import { TemplateExpressions } from './assets/componentes/TemplateExpressions'


// 2 - Exibindo coponente na tela 
function App() {
  const [count, setCount] = useState(0)

  return (
<div className="AppFundamentos">
  <h1>Fundamentos do React</h1>
  <PrimeiroComponente/>
  <TemplateExpressions/>

</div>
  )
}

export default App
