import '../styles/globals.css'
import { Navigation } from '../components/navigation'
export default function RootLayout ({ children }) {
  return (
    <html>
      <Navigation />
      {children}
    </html>
  )
}
