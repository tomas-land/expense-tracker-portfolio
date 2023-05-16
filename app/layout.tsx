

export default function RootLayout({
  children,
}: {
  children: any
}) {  return (
    <html>
      <body>
        <main>
          <div className="wrapper">

              {children}
      
          </div>
        </main>
      </body>
    </html >
  )
}

