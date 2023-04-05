import {Block} from "Components/Block/Block";
import {useState} from "react";
import {Input} from "Components/SearchPage/Input/Input";
import {Header} from "Components/Header/Header";

export const SearchPage = () =>{
    const [generate, setGenerate] = useState('');
    return(
        <div>
            <Header/>
        <Block generate={generate}>
        <Input setGenerate={setGenerate}/>
    </Block>
        </div>)
}