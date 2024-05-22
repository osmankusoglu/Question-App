import React from "react";

//Question sınıfı içe aktarma import etme işlemi
import Question from "./Question";

function Result({ results, correctAnswers }) {
  return (
    <div className="result">
      <h2>Tebrikler Testi Bitirdiniz!</h2>
      <h2 className="result-title">TEST SONUCU</h2>
      <div className="div-result">
        <div className="div-cor">
          <p>Doğru Sayınız: {correctAnswers}</p>
        </div>
        <div className="div-wro">
          <p>Yanlış Sayınız: {results.length - correctAnswers}</p>
        </div>

        <ul id="answers-list">
          {results.map((result, index) => (
            <li key={index}>
              <div className="div-res-answ">
                {index + 1}. soru
                <br />
                Cevabınız - (
                {result.selected === -1 ? "Cevaplanmadı" : result.selected})
              </div>
              <div className="div-res-cor">Doğru Cevap: {result.correct}</div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Result;

//
