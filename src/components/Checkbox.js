import React, {useEffect, useState} from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    const [first, setFirst] = useState(true)

    const onCheck = () => {
        setChecked(!checked)
        setFirst(false)
    }

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={onCheck}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
};