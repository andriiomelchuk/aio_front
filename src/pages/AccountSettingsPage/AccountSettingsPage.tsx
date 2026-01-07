import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";


const AccountSettingsPage: React.FC = () => {
    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

    <Wrapper><h1>Account Setting Page</h1></Wrapper>
        
    </>
}


export default AccountSettingsPage;