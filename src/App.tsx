import { AppStyles,} from "App.styled"
import Footer from "components/Footer"
import Header from "components/Header"
import HomePage from "pages/HomePage"
import { Suspense } from "react"
import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"


const App = () => {
    return (
        <>
            <AppStyles/>
            <Header />
            <Suspense fallback={'Loading'}>
                <PublicRoutes />
                {/* <PrivateRoutes /> */}
            </Suspense>
            <Footer />
        </>
    )
}

export default App