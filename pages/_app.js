import '../styles/globals.css'
import 'react-responsive-modal/styles.css';
import {AppWrapper, useAppContext} from "../context/AppContext";

function MyApp({Component, pageProps}) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyApp
