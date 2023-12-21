import React, {useState} from 'react';
import './input.css'

const Input = () => {

    const [user, setUser] = useState('')
    const [text, setText] = useState('')

    const handleUser = e => {
        setUser(e.target.value)
    }
    const handleText = e => {
        setText(e.target.value)
    }
    const handleLog = () => {
        console.log(user + ' : ' + text)
        setUser('')
        setText('')
    }

    return (
        <>
            <div className={'userInput'}>
                <input value={user} onChange={handleUser} placeholder={'User'} type="text"/>
                <input value={text} onChange={handleText} placeholder={'Type something....'} type="text"/>
                <button onClick={handleLog}>Send</button>
            </div>
        </>
    );
};

export default Input;