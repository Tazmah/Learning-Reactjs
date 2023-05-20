import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () => {
    return (
        <div className="box">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout