import { UserContextProvider } from './contexts/UserContextProvider'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='w-screen h-screen bg-dark-primary text-zinc-300'>
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </div>
  )
}

export default App
