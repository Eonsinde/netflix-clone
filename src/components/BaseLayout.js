import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import { ProtectedView } from '../context/AuthContext'


export default function BaseLayout() {
  return (
    <ProtectedView>
        <Nav />
        <Outlet />
    </ProtectedView>
  )
}
