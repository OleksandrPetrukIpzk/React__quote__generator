import {useState} from "react";
import axios from "axios";
import './style.css'

export const Input = ({setGenerate}) => {
    const [searchNumber, setSearchNumber] = useState(2);
    const [error, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (value) => {
        if (!Number(value)) {
            setError('Please enter number')
            setIsDisabled(true);
        } else {
            setError('')
            setIsDisabled(false);
            setSearchNumber(value);
        }
    }

    const handleClick = () => {
        if (searchNumber > 224) {
            setError('Very big number write number smaller than 224')
        } else if (searchNumber <= 0) {
            setError('Very small number write number biggest than 1')
        } else {
            axios.get(`https://api.adviceslip.com/advice/${searchNumber}`)
                .then(response => setGenerate(response.data.slip.advice))
                .catch(() => setGenerate("Sorry something went wrong. Please click button again"))
        }
    }

    return (<div className='inputs'>
        <div className='errors'>
            <input type='text' onChange={(e) => handleChange(e.target.value)}/>
            <button onClick={handleClick} disabled={isDisabled}>Search</button>
        </div>
        <p className='text'>{error}</p>
    </div>)
}