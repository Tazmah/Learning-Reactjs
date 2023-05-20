
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Contact from './Contact'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {


  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
