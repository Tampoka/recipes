import React, {useEffect, useState} from 'react';

const loadJSON = key => {
   return  key && JSON.parse(localStorage.getItem(key))
};
const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

const LocalStorage = ({login}) => {
    const [data, setData] = useState(loadJSON(`user:${login}`));
    useEffect(() => {
        if (!data) return;
        const {name, avatar_url, location} = data;
        saveJSON(`user:${login}`, {
            name,
            login,
            avatar_url,
            location
        });
        return()=> localStorage.clear()
    }, [data]);

    useEffect(() => {
        if (!login) return;
        if (data && data.login === login) return;
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    // localStorage.clear()
    if (data)
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    return null;
}
export default LocalStorage;

