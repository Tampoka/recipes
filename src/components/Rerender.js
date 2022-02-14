import React, {useCallback, useEffect, useMemo, useState} from 'react';


const Rerender = ({children = ""}) => {
    const useAnyKeyToRender = () => {
        const [, forceRender] = useState();
        useEffect(() => {
            window.addEventListener("keydown", forceRender);
            return () => window.removeEventListener("keydown", forceRender);
        }, []);
    };
    useAnyKeyToRender();

    const words = useMemo(() => children.split(" "),[children])
    // const words =children.split(" ")

    // useEffect(() => {
    //     console.log("fresh render");
    // }, [words]);

    const fn = useCallback(() => {
        console.log("hello");
        console.log("world");
    },[]);
    useEffect(() => {
        console.log("fresh render from fn");
        fn();
    }, [fn]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} — words</strong>
            </p>
        </>
    )
};

export default Rerender;