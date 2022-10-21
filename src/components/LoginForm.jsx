import axios from 'axios';
import { useState } from 'react';

const projectId = "b0e59ad1-d778-49e3-aec6-c2ec8f461c58"



const LoginForm = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'project ID': projectId, 'User Name': username, 
        'User-Secret': password};

        try{
            await axios.get('https://api.chatengine.io/chats', {headres: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err){
            setError('Oops, incorrect credentials');
        }
    }


    return (
        <div className= "wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={ (e) => setUserName(e.target.value)} 
                        className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={ (e) => setUserName(e.target.value)} 
                        className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button">
                            <span>Start Chating</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
}