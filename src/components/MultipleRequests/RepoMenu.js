import React, {useEffect} from 'react';
import {useIterator} from '../../customHooks/useIterator';

const RepoMenu = ({repositories, onSelect = f => f}) => {
    const [{name,description,homepage}, previous, next] = useIterator(repositories)
    console.log(name)
    // const [userRepo, previous, next] = useIterator(repositories)
    // const {description,homepage}=userRepo
    // const name=userRepo.name||''

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name])

    return (
        <div>
            <div style={{display: "flex"}}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <p>Description : {description}</p>
            {homepage&&<p><a href={homepage} target="_blank" rel="noopener noreferrer">Check github pages</a></p>}
        </div>
    );
};

export default RepoMenu;