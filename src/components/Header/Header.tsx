import Nav from "components/Nav";
import { HeaderWrapper } from "./styled";


const Header = () => {
    return <>
        <HeaderWrapper>
            <h2>Header</h2>
            <Nav />
        </HeaderWrapper>
    </>
}

export default Header;