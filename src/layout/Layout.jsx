import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyBar from '../components/StickyBar'
import ReservationModal from '../components/ReservationModal'
import { ReservationProvider, useReservation } from '../context/ReservationContext'
import { CartProvider } from '../context/CartContext'
import ScrollToTop from "../components/ScrollToTop"

function ReservationModalWrapper() {
  const { isOpen, closeReservation } = useReservation()
  return <ReservationModal isOpen={isOpen} onClose={closeReservation} />
}

export default function Layout() {
  return (

    <CartProvider>
      <ReservationProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <StickyBar />
          <ReservationModalWrapper />
        </div>
      </ReservationProvider>
    </CartProvider>

  )
}
