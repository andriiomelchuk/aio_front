import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";


const GitPopularPage: React.FC = () => {
    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

    <Wrapper><h1>Git Popular Page</h1></Wrapper>
        
    </>
}


export default GitPopularPage;