import { LoaderContainer, Loading, Overlay } from "./styled";


const Loader = () => {
    return <>
        <LoaderContainer>
            <Loading />
        </LoaderContainer>
        <Overlay />
    </>
}

export default Loader;