import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'

export default function Home() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/${username}`);
    };

    return (
        <section className='card'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>Home</h1>
            <p>Welcome to the Home page</p>
        </section>
    );
}