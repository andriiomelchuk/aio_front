import { useEffect, useState } from "react";
import { MovieRadio, RadioContainer, SearchButton, SearchContent, SearchMovie } from "./styled";
import { useSearchParams } from "react-router-dom";



const Search: React.FC = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    let movieType = searchParams.get("type") ?? "";
    let movieName = searchParams.get("name") ?? "";
    const [localMovieName, setLocalMovieName] = useState("");
    const [localMovieType, setLocalMovieType] = useState("movie");

    const movieTypes = ["Movie", "Series", "Game"]


    useEffect(() => {
        setSearchParams({ name: movieName, type: localMovieType })

    }, [localMovieType])


    useEffect(() => {

        setLocalMovieName(movieName)
        setLocalMovieType(movieType)

    }, [movieName, movieType])

    document.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            setSearchParams({name: localMovieName, type: localMovieType})
        }
    })

    return <>
        <SearchContent>
            <SearchMovie placeholder="Type your movie" value={localMovieName} onChange={(e) => {
                setLocalMovieName(e.target.value)
            }} />
            <SearchButton onClick={() => setSearchParams({ name: localMovieName, type: localMovieType })}> Search</SearchButton>
            <RadioContainer >
                {movieTypes.map((type) => (
                    <label key={type}>
                        <MovieRadio
                            type="radio"
                            name="type"
                            value={type}
                            checked={localMovieType.toLowerCase() === type.toLowerCase()}
                            onChange={() => {
                                setLocalMovieType(type.toLowerCase())
                            }}
                        />
                        {type}
                    </label>
                ))}
            </RadioContainer    >
        </SearchContent >
    </>
}

export default Search;