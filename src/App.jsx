import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import TabBar from './components/TabBar/TabBar'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import Explore from './pages/Explore/Explore'
import Home from './pages/Home/Home'
import Knocks from './pages/Knocks/Knocks'
import Conversation from './pages/LivingRoom/Conversation'
import LivingRoom from './pages/LivingRoom/LivingRoom'
import MyRoom from './pages/MyRoom/MyRoom'
import OpenDoor from './pages/OpenDoor/OpenDoor'

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/open-door" element={<OpenDoor />} />
      <Route path="/living-room/:id" element={<Conversation />} />

      {/* Les routes placées dans TabsLayout affichent la TabBar */}
      <Route element={<TabsLayout />}>
        <Route path="/explore" element={<Explore />} />
        <Route path="/knocks" element={<Knocks />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/my-room" element={<MyRoom />} />
      </Route>

      {/* Adresse inconnue : retour à l'accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
