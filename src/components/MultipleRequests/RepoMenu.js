import React, {useEffect} from 'react';
import {useIterator} from '../../customHooks/useIterator';

export const RepoMenu = ({repositories, selected,onSelect=f=>f}) => {
    const [{name, description, homepage}, previous, next] = useIterator(repositories,
        selected?repositories.findIndex(repo=>repo.name===selected):null)

    useEffect(() => {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div>
            <div style={{display: "flex"}}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <div><p>Description : {description}</p>
                {homepage && <p><a href={homepage} target="_blank" rel="noopener noreferrer">Check github pages</a></p>}
            </div>
        </div>
    );
};


