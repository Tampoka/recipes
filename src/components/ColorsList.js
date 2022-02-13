import React from "react";
import Color from "./Color";
import AddColorForm from './AddColorForm';

export default function ColorList({colors = [], onRemoveColor = f => f, onRateColor = f => f, onNewColor = f => f}) {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div>
            <AddColorForm onNewColor={onNewColor}/>
            {
                colors.map(color =>
                    <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>)
            }
        </div>
    );
}