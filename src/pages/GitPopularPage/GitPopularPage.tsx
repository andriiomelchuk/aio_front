import { Helmet } from "react-helmet";
import { Wrapper, PageWrapper } from "App.styled";
import SelectedLanguages from "./SelectedLanguages";
import Repositories from "./Repositories";


const GitPopularPage: React.FC = () => {

    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>
        <PageWrapper>
            <Wrapper><h1>Git Popular Page</h1>

                <SelectedLanguages />

                <Repositories />

            </Wrapper>
        </PageWrapper>
    </>
}


export default GitPopularPage;