import { Navigate, Route, Routes } from "react-router-dom"
import { lazy } from "react"
const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazyRegister = lazy(()=> import("./pages/auth/Register"))
const LazyForgotPassword = lazy(()=> import("./pages/auth/ForgotPassword"))
import { useState } from 'react'
import './assets/css/App.css';
import './pages/auth/Register'

import LazySuspense from "./components/LazySuspense"
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyHome = lazy(() => import("./pages/user/Main"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))
const LazyHomepage = lazy(() => import("./pages/user/Homepage"))
const LazyFooter = lazy(() => import("./pages/user/Footer"))
const LazyTermsAndConditions = lazy(() => import("./pages/user/TermsAndConditions"))
const LazyCruiseDestinationsPage = lazy(() => import("./pages/user/CruiseDestinationsPage"))
const LazyAquaventures = lazy(() =>import("./pages/user/AquaventuresPage"))
const LazyCruiseEventPage = lazy(() =>import("./pages/user/CruiseEventPage"))

const UserRoutes = () => {
  return (
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
        <Route path="/homepage" element={<LazySuspense component={LazyHomepage}/>}/>
      </Routes>
    </LazyUserMain>
  )
}

const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path ="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}
function App() {
     const[count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/project/register"/>}/>
      <Route path="/project/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/project/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/project/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/project/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/project/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
      <Route path="/project/homepage/*" element={<LazySuspense component={LazyHomepage}/>}/>
      <Route path="/project/footer" element={<LazySuspense component={LazyFooter}/>}/>
      <Route path="/project/terms" element={<LazySuspense component={LazyTermsAndConditions}/>}/>
      <Route path="/project/cruise" element={<LazySuspense component={LazyCruiseDestinationsPage}/>}/>
      <Route path="/project/aquaventures" element={<LazySuspense component={LazyAquaventures}/>}/>
      <Route path="/project/events" element={<LazySuspense component={LazyCruiseEventPage}/>}/>
      
      

    </Routes>
  )
}

export default App