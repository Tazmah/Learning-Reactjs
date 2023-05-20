import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Menue from "./pages/Menue"
import Contact from "./pages/Contact"
import { useState, createContext } from "react"
import Profile from "./pages/Profile"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Form from "./pages/Form"
import TogglePage from "./pages/TogglePage"
import Cat from "./pages/Cat"
import Count from "./pages/Count"
import Person from "./pages/Person"

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
            <Link to="/cat">Cat</Link>
            <Link to="/count">Count</Link>
            <Link to="/person">Person</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menue" element={<Menue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<Form />} />
            <Route path="/toggle" element={<TogglePage />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/count" element={<Count />} />
            <Route path="/person" element={<Person
              name="Pedro"
              email="pedro@mail.com"
              age={21}
              isMarried={true}
              friends={["Habeeb", "Roqeeb", "Malik", "Hafeez"]}
            />} />
            <Route path="*" element={<><h1>Page Not found</h1></>} />

          </Routes>
        </>
      </AppContext.Provider>
    </QueryClientProvider>

  )
}

export default App
