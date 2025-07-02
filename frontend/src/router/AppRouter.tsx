import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import Inventory from "../pages/Inventory"
import Promotions from "../pages/Promotions"
import Sales from "../pages/Sales"
import Statistics from "../pages/Statistics"
import Users from "../pages/Users"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="sales" element={<Sales />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
