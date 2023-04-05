import {useState} from "react";
import {Block} from "Components/Block/Block";
import {Button} from "Components/Main/Button/Button";
import {Header} from "Components/Header/Header";
import './style.css'

export const Main = () =>{

    const [generate, setGenerate] = useState('');

    return(<>
        <Header/>
        <Block generate={generate}>
        <Button setGenerate={setGenerate}/>
        </Block>

    </>)
}