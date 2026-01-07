import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";
import { PageWrapper } from "App.styled";


const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

    <PageWrapper><h1>Home Page</h1></PageWrapper>
        
    </>
}


export default HomePage;