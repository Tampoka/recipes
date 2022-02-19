/*
const gnar = "gnarly";
const info = ({
                  file = __filename,
                  dir = __dirname
              }) => (
    <p>
        {dir}: {file}
    </p>
);
switch (gnar) {
    default:
        console.log("gnarly");
        break;
}*/

import {useState} from 'react';

function gnar() {
    const [nickname, setNickname] = useState(
        "dude"
    );
    return <h1>gnarly</h1>;
}