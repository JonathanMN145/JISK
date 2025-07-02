import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navbar fijo a la izquierda */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="flex-1 ml-20 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout