import React from "react";
import {Star} from './Star';

const createArray = length => [...Array(length)]

export default function StarRating({style = {}, totalStars = 5, selectedStars = 0,onRate=f=>f, ...props}) {
    return (
        <div style={{padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}