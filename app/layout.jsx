import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata={
    title:"ThoughtSnap",
    description:"Share what's on ur mind ! "
}


const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <head>
        <link rel="icon" type="image/png" href="/assets/images/logo.png"/>
        </head>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}

            </main>

            </Provider>
           
        </body>

    </html>
  )
}

export default Rootlayout