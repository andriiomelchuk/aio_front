
import React from "react";
import { LanguageItems, DeleteButton } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { deleteSelectedLanguage, setNewLanguage, setSelectedLanguage } from "store/popular/popular.action";





const SelectedLanguages = () => {

    const [languageInput, setLanguageInput] = React.useState<string>("");
    const languages = useSelector((state: any) => state.rootReducer.popular.languages);

    const dispatch: Dispatch = useDispatch();

    return (
        <>
            <LanguageItems>
                <ul>
                    {languages.map((lang: string, index: number) => (
                        <li key={index} onClick={() => dispatch(setSelectedLanguage(index))}>
                            <button key={index} >{lang}</button>
                            {languages.length > 6 && <DeleteButton onClick={() => dispatch(deleteSelectedLanguage(lang))}>X</DeleteButton>}
                        </li>
                    ))}
                    <li className="adding"><input type="text" placeholder="Add your language" onChange={(e) => setLanguageInput(e.target.value)} />

                        <button onClick={() => dispatch(setNewLanguage(languageInput))}>Add</button>
                    </li>

                </ul>
            </LanguageItems>
        </>
    )
}
export default SelectedLanguages;