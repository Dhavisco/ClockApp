import './App.css'
import Index from './components/Index'
import { useUpdateBackground } from './hooks/useUpdateBackground'

function App() {

  useUpdateBackground();
  return (
    <>
      <Index/>
      
      

    </>
  )
}

export default App
