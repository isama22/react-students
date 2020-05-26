import React from "react";

const Score = (props) => (
    <div className='scores'>
        <h5><em>date:</em> {props.date}</h5>
        <h5><em>score:</em> {props.score}</h5>
    </div>
)
export default Score