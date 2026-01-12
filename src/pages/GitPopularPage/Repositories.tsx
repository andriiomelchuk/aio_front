import { fetchPopularRepos } from "api/apis";
import { Items, PopularUser } from "./styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_IS_LOADING } from "consts";
import Loader from "components/Loader/Loader";

const Repositories = () => {

    const dispatch = useDispatch();

    const languages = useSelector((state: any) => state.rootReducer.popular.languages);
    const selectedLanguageIndex = useSelector((state: any) => state.rootReducer.popular.selectedLanguageIndex);
    const [repos, setRepos] = useState<any[]>([]);
    const isLoading = useSelector((state: any) => state.rootReducer.app.isLoading);

    useEffect(() => {
        console.log('isLoading:', isLoading);
        dispatch({ type: SET_IS_LOADING, payload: true });
        fetchPopularRepos(languages[selectedLanguageIndex]).then((data) => setRepos(data)).finally(() => dispatch({ type: SET_IS_LOADING, payload: false }));
    }, [selectedLanguageIndex]);

    if (isLoading) {
        return <Loader />;
    }


    return (
        <>
            
            <Items>
                {repos.map((repo: any, index: number) => (
                    <PopularUser key={repo.id}>
                        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}><div># {index++}</div><div>{repo.language}</div></div>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                        <div>Repository: {repo.name}</div>
                        <div>User: {repo.owner.login}</div>
                        <div>Stars: {repo.stargazers_count} </div>
                    </PopularUser>
                ))}
            </Items>
        </>
    )
}

export default Repositories;