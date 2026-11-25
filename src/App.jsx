import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import TabBar from './components/TabBar/TabBar'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './context/ProtectedRoute'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import Explore from './pages/Explore/Explore'
import Home from './pages/Home/Home'
import Knocks from './pages/Knocks/Knocks'
import ListingDetail from './pages/ListingDetail/ListingDetail'
import LivingRoom from './pages/LivingRoom/LivingRoom'
import Login from './pages/Login/Login'
import MyRoom from './pages/MyRoom/MyRoom'
import Register from './pages/Register/Register'
import VerifyIdentity from './pages/VerifyIdentity/VerifyIdentity'

// Mise en page des 4 onglets : la page (Outlet) puis la TabBar en bas
const TabsLayout = () => {
  return (
    <>
      <Outlet />
      <TabBar />
    </>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/verify-identity"
          element={
            <ProtectedRoute>
              <VerifyIdentity />
            </ProtectedRoute>
          }
        />

        {/* Les routes placées dans TabsLayout affichent la TabBar */}
        <Route
          element={
            <ProtectedRoute>
              <TabsLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/explore" element={<Explore />} />
          <Route path="/listings/:id" element={<ListingDetail />} />
          <Route path="/knocks" element={<Knocks />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/my-room" element={<MyRoom />} />
        </Route>

        {/* Adresse inconnue : retour à l'accueil */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
