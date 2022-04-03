import '../styles/globals.css'
import "../styles/globalStyles.scss"
import 'react-responsive-modal/styles.css';
import {AppWrapper} from "../context/AppContext";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
    return (
        <AppWrapper>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </AppWrapper>
    )
}

export default MyApp
