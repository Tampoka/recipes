import React, {useEffect, useState} from 'react';
import Cat from './Cat';

const Cats = () => {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    const [first, setFirst] = useState(true)

    useEffect(() => {
        if (!first) {
            console.log('You added a Cat!')
        }
    }, [cats])

    // const meow=useCallback(catName => console.log(`${catName} has meowed`),[])
    const meow = catName => console.log(`${catName} has meowed`)

    return (
        <>
            {cats.map((name, i) => (
                <Cat key={i} name={name} meow={meow}/>
            ))}
            <button onClick={() => {
                setCats([...cats, prompt("Name a cat")]);
                setFirst(false)
            }}>
                Add a Cat
            </button>
        </>
    );
}

export default Cats;