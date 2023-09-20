import './App.css'

import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'

function App() {
   return (
      <main className='bg-gray-200 min-w-screen min-h-screen'>
         <header className='p-5'>
            <Header />
            <NavBar />
         </header>
         <section className='m-auto mt-20 w-96'>
            <Products />
         </section>
      </main>
   )
}

export default App
