import Main from './components/Main/Main'
import CountTaskProvider from './context/CountTaskContext'

function App() {

  return (
    <>
      <CountTaskProvider>
        <Main />
      </CountTaskProvider>
    </>
  )
}

export default App
