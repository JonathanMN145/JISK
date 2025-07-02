import type React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, ShoppingCart, BarChart3, LogOut, Package, Tag, Users } from "lucide-react"

interface NavItem {
  icon: React.ReactNode
  path: string
  label: string
}

const navItems: NavItem[] = [
  {
    icon: <Home size={20} />,
    path: "/",
    label: "Home",
  },
  {
    icon: <Package size={20} />,
    path: "/inventory",
    label: "Inventory",
  },
  {
    icon: <Tag size={20} />,
    path: "/promotions",
    label: "Promotions",
  },
  {
    icon: <ShoppingCart size={20} />,
    path: "/sales",
    label: "Sales",
  },
  {
    icon: <BarChart3 size={20} />,
    path: "/statistics",
    label: "Statistics",
  },
  {
    icon: <Users size={20} />,
    path: "/users",
    label: "Users",
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-slate-800 flex flex-col items-center py-6 shadow-lg z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-slate-800 rounded-sm"></div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col space-y-4 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 group relative
                ${
                  isActive
                    ? "bg-orange-400 text-white shadow-lg"
                    : "text-orange-400 hover:bg-slate-700 hover:text-orange-300"
                }
              `}
              title={item.label}
            >
              {item.icon}

              {/* Tooltip */}
              <div className="absolute left-16 bg-slate-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {item.label}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          className="w-12 h-12 rounded-lg flex items-center justify-center text-orange-400 hover:bg-slate-700 hover:text-orange-300 transition-all duration-200 group relative"
          title="Cerrar Sesión"
        >
          <LogOut size={20} />

          {/* Tooltip */}
          <div className="absolute left-16 bg-slate-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
            Cerrar Sesión
          </div>
        </button>
      </div>
    </nav>
  )
}
