import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";


const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

    <Wrapper><h1>Home Page</h1></Wrapper>
        
    </>
}


export default HomePage;