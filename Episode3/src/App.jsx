import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Main from "./pages/main/Main"
import Login from "./pages/Login"
import CreatePost from "./pages/create-post/CreatePost"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./config/firebase"

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {!user && <Route path="/login" element={<Login />} />}
          {user && <Route path="/createpost" element={<CreatePost />} />}
        </Route>
      </Routes>
    </>
  )
}

export default App
