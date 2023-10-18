import { Provider } from 'react-redux'
import '../globals.css'


export default function RootLayout({
children
}:{children:React.ReactNode}) {

    return(
        // <html lang="en">
            <div>
              
                {children}
               
            </div>
        // </html>
    )
}