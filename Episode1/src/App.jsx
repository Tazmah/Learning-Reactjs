import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Menue from "./pages/Menue"
import Contact from "./pages/Contact"
import { useState, createContext } from "react"
import Profile from "./pages/Profile"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Form from "./pages/Form"
import TogglePage from "./pages/TogglePage"

export const AppContext = createContext()

function App() {

  const [username, setUsername] = useState("Pedro Tech")
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <AppContext.Provider value={{ username, setUsername }}>
        <>
          <div>
            <Link to="/">Home</Link>
            <Link to="/menue">Menue</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/form">Form</Link>
            <Link to="/toggle">Toggle</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menue" element={<Menue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<Form />} />
            <Route path="/toggle" element={<TogglePage />} />
            <Route path="*" element={<><h1>Page Not found</h1></>} />

          </Routes>
        </>
      </AppContext.Provider>
    </QueryClientProvider>

  )
}

export default App
