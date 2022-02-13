import React, {useState} from "react";

export default function AddColorForm({onNewColor = f => f}) {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('black')

    const submit = e => {
        e.preventDefault()
        onNewColor(title, color)
        setTitle('')
        setColor('black')
    }
    return (
        <form onSubmit={submit}>
            <input value={title} type="text" placeholder="color title..." required
                   onChange={(e) => setTitle(e.currentTarget.value)}/>
            <input value={color} type="color" required onChange={(e) => setColor(e.currentTarget.value)}/>
            <button>ADD</button>
        </form>
    )
}