//External Lib

//Internal Lib
import { AppProvider } from '@context/context';
//Styles
import "../styles/globals.scss"
import { Comfortaa } from 'next/font/google'

const comforta = Comfortaa({
  subsets: ['latin'],
  display: "swap"
})
export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <body>
        <main className={comforta.className}>
          <div className="wrapper">
            <AppProvider>
              {children}
            </AppProvider>
          </div>
        </main>
      </body>
    </html >
  )
}
