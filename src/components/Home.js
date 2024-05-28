import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/${username}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}