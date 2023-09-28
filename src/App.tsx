import { UserContextProvider } from './contexts/UserContextProvider'
import { AppRouter } from './routes/app.route'

function App() {
  return (
    <div className='min-w-screen min-h-screen bg-dark-primary text-zinc-300'>
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </div>
  )
}

export default App
