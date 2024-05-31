import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../actions/userAction';

export default function Clients() {
    const { username } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(username));
    }, [dispatch, username]); // dependencies of the effect

    // Get the userInfo from the Redux state
    const userInfo = useSelector(state => state.user.userInfo);

    // Check if userInfo exists and if it's loading
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const { name, avatar, ranking, reputation, gitHub, twitter, linkedIN, website, country, company, school, skillTags, about } = userInfo;

    return (
        <div>
            <h1>{name}</h1>
            <img src={avatar} alt={name} />
            <p>Ranking: {ranking}</p>
            <p>Reputation: {reputation}</p>
            {/* <p>GitHub: {gitHub}</p>
            <p>Twitter: {twitter}</p>
            <p>LinkedIn: {linkedIN}</p>
            <p>Website: {website.join(', ')}</p>
            <p>Country: {country}</p>
            <p>Company: {company}</p>
            <p>School: {school}</p>
            <p>Skills: {skillTags.join(', ')}</p>
            <p>About: {about}</p> */}
        </div>
    );
}