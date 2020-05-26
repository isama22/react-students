import React from "react";
import Score from '../Score/Score';

const Student = (props, ) => (
//   <Students 
//   name={name}
//   bio={bio}
//   score={
//     //date & score
// }
//   /> 
  <>
<div className='students'>
    <h1>{props.name}</h1>
    <p className="bio">{props.bio}</p>
    {props.scores.map(score => (
        <Score
            date={score.date}
            score={score.score}
            />
    ))}
</div>
  <hr/>
  </>
  )

export default Student