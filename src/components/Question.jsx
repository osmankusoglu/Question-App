import React from "react";

// Soruların gösterilmesi
function Question({ question, media }) {
  return (
    <div id="question-container">
      {media && <img src={`${media}`} alt="question related" />}
      <h2 id="question">{question}</h2>
    </div>
  );
}

export default Question;

//
