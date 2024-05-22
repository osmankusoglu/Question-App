import React, { useState, useEffect } from "react";
//Question sınıfı içe aktarma import etme işlemi
import Question from "./Question";
//Options sınıfı içe aktarma import etme işlemi
import Options from "./Options";

function Quiz({ questions, onFinish }) {
  // Şu anki sorunun index değeri
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Seçeneklerin gösterilip gösterilmeyeceği durumu
  const [showOptions, setShowOptions] = useState(false);

  // Kullanıcının verdiği cevapların sonuçları
  const [results, setResults] = useState([]);

  // Doğru cevap sayısı
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // 30 saniyelik geri sayım için başlangıç sayısı
  const [timer, setTimer] = useState(30);

  // Her saniyede bir geri sayım işlemi
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Geri sayım biterse bir sonraki soruya geç
    if (timer === 0) {
      nextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  // Her bir soru gösterildikten 10 saniye sonra seçenekleri gösterme
  useEffect(() => {
    const showOptionsTimeout = setTimeout(() => setShowOptions(true), 10000);
    return () => clearTimeout(showOptionsTimeout);
  }, [currentQuestionIndex]);

  // Kullanıcının seçtiği bir cevabı alır
  const selectAnswer = (optionIndex) => {
    // Şu anki soruyu alma işlemi
    const question = questions[currentQuestionIndex];

    // Kullanıcının seçtiği seçeneğin doğru olup olmadığını kontrol eder
    const isCorrect = question.options[optionIndex] === question.answer;

    // setResult çağırılır
    setResults((prevResults) => [
      ...prevResults,
      {
        question: question.question,
        selected: question.options[optionIndex],
        correct: question.answer,
      },
    ]);

    // Doğru cevap sayısına ekleme yapma
    if (isCorrect) setCorrectAnswers((prev) => prev + 1);

    // Bir sonraki soruya geçme işlemi
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);

      // Yeni soruda seçenekleri gösterme durumunu sıfırla
      setShowOptions(false);

      // Bir sonraki soruya geçerken geri sayımı sıfırla
      setTimer(30);
    } else {
      // Sorular bitince sonucu rapor et
      onFinish(results, correctAnswers);
    }
  };

  // Soru ve seçenekleri gösterme
  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <div
        // 20. saniyeden itibaren warn çalıştır ve 10. saniyeden itibaren warning çalıştır
        className={`timer-border ${timer <= 20 ? "warn" : ""} ${
          timer <= 10 ? "warning" : ""
        }`}
      >
        <div className="timer">{timer}</div>
      </div>

      {/* Soruyu gösterme */}
      <Question question={question.question} media={question.media} />

      {/* Seçenekleri gösterme */}
      {showOptions && (
        <Options options={question.options} onSelect={selectAnswer} />
      )}
    </div>
  );
}

export default Quiz;

//
