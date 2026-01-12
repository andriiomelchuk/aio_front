import { Helmet } from "react-helmet";
import { Wrapper } from "App.styled";
import { PageWrapper } from "App.styled";
import { Items, Landuages, PopularUser } from "./styled";
import { useState, useEffect } from "react";
import { fetchPopularRepos } from "API/apis";


const GitPopularPage: React.FC = () => {

    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    const [repos, setRepos] = useState<any[]>([]);
    const [lang, setLang] = useState<string>("All");

    useEffect(() => {
        fetchPopularRepos(lang).then((data) => setRepos(data));
    }, [lang]);

    let count = 0; 

    return <>
        <Helmet>
            <h1>Title into head tag</h1>
        </Helmet>
        <PageWrapper>


            <Wrapper><h1>Git Popular Page</h1>
                <Landuages>
                    {languages.map((lang) => (
                        <button key={lang} onClick={() => setLang(lang)}>{lang}</button>
                    ))}
                </Landuages>

                <Items>
                    {repos.map((repo: any) => ( 
                        <PopularUser key={repo.id}>
                            <div># {count++}</div>
                            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                            <div>Repository: {repo.name}</div>
                            <div>User: {repo.owner.login}</div>
                            <div>Stars: {repo.stargazers_count} </div>
                        </PopularUser>
                    ))}
                </Items>
            </Wrapper>
        </PageWrapper>
    </>
}


export default GitPopularPage;