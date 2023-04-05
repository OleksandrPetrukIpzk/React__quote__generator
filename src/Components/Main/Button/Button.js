import axios from "axios";
import './style.css'

export const Button = ({setGenerate}) => {

    const searchGenerate = () => {
        axios.get(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224)}`)
            .then(response => setGenerate(response.data.slip.advice))
            .catch(error => setGenerate("Sorry something went wrong. Please click button again"))
    }

    return (<div className='buttons'>
        <button onClick={searchGenerate}>Generate</button>
    </div>)
}