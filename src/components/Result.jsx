import React from "react";

//Question sınıfı içe aktarma import etme işlemi
import Question from "./Question";

function Result({ results, correctAnswers }) {
  return (
    <div className="result">
      <h2 className="result-title">TEST SONUCU</h2>
      <div className="div-result">
        <div className="div-cor">
          <p>Doğru Sayınız: {correctAnswers}</p>
        </div>
        <div className="div-wro">
          <p>Yanlış Sayınız: {results.length - correctAnswers}</p>
        </div>
        {/* <div className="div-noansw">
          <p>
            Cevaplamadığınız Sorular: yanlış soru
            {results.length - correctAnswers} + doğru soru{correctAnswers} +
            {results.length}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Result;
