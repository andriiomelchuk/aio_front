import { Helmet } from "react-helmet";
import { Wrapper } from "./styled";


const ProductDetailsPage: React.FC = () => {
    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>

    <Wrapper><h1>Product Details Page</h1></Wrapper>
        
    </>
}


export default ProductDetailsPage;