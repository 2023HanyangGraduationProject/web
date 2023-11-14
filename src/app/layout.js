import Providers from './_providers/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './_components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Soul Ticket',
  description: 'Tickets based on Soulbound Token',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{minHeight: 100 + "vh"}}>
        <Providers>
          <div className="flex justify-center pt-4">
            <NavBar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
