import React, { useState } from 'react'
import Header from '../Header'
import { SuiteContext } from '../../Contexts/Suite'
const App = () => {
  const [suite, setSuite] = useState(0)

  return (
    <>
      <SuiteContext.Provider value={{ suite, setSuite }}>
        <Header />
      </SuiteContext.Provider>
    </>
  )
}

export default App
