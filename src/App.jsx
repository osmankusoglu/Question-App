import React, { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./index.css";

const questions = [
  {
    question: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
    answer: "Pirinç Unu",
    media: "cin-seddi.jpg",
  },
  {
    question: "İlk Pamuk şekeri bulan kişinin mesleği nedir?",
    options: ["Gıda Mühendisi", "Diş Doktoru", "Ev Hanımı", "Güzellik Uzmanı"],
    answer: "Diş Doktoru",
    media: "pamuk.jpg",
  },
  {
    question:
      "Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamda bulunan kişi kimdir?",
    options: ["Gülben Ergen", "Hülya Avşar", "Harika Avcı", "Sevtap Parman"],
    answer: "Gülben Ergen",
    media: "tarkan.jpg",
  },
  {
    question: "Pteronofobi nedir?",
    options: [
      "Yeşil ışık yanar yanmaz korna çalacak korkusu",
      "Fakir kalma korkusu",
      "Taksi bulamama korkusu",
      "Kuş tüyüyle gıdıklanma korkusu",
    ],
    answer: "Kuş tüyüyle gıdıklanma korkusu",
    media: "fobi.jpg",
  },
  {
    question:
      "Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
    options: ["43", "78", "23", "99"],
    answer: "43",
    media: "balik.jpg",
  },
  {
    question:
      "90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
    options: ["Sezen Aksu", "Sibel Can", "Mustafa Sandal", "Bülent Ersoy"],
    answer: "Mustafa Sandal",
    media: "bandira.jpg",
  },
  {
    question:
      "Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
    options: ["Hande Yener", "Hadise", "Gülşen", "Simge"],
    answer: "Hadise",
    media: "billboard.jpg",
  },
  {
    question: "Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
    options: ["Gül Suyu", "Bal", "Gladyatör Teri", "Kan"],
    answer: "Gladyatör Teri",
    media: "parfum.jpg",
  },
  {
    question: "T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
    options: ["İnekler", "Tavuklar", "Timsahlar", "Köpekler"],
    answer: "Tavuklar",
    media: "trex.jpg",
  },
  {
    question:
      "Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
    options: ["Çerofobi", "Euphobia", "Felicifobia", "Mutluluk Korkusu"],
    answer: "Çerofobi",
    media: "fobi.jpg",
  },
];

function App() {
  // Mevcut adımı (durumu) saklar. Başlangıç "intro" olarak ayarlanır.
  const [step, setStep] = useState("intro");

  // Kullanıcının quiz sırasında aldığı sonuçların(results) olduqu kısım. Başlangıçta boş bir dizi olarak ayarlanır.
  const [results, setResults] = useState([]);

  // Kullanıcının doğru cevap sayısının(correctAnswers) olduğu kısım. Başlangıçta state 0 olarak ayarlanır.
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Quiz'i başlatan fonksiyon
  const startQuiz = () => {
    // 'step' state'ini "quiz" olarak günceller, böylece (<Quiz>) ekranda görüntülenir.
    setStep("quiz");
  };

  // Quiz'i tamamlayan fonksiyon
  const finishQuiz = (results, correctAnswers) => {
    setResults(results);
    setCorrectAnswers(correctAnswers);
    setStep("result");
  };

  return (
    <div className="container">
      {/* Giriş ekranı: Eğer 'step' durumu "intro" ise, <Intro>  görüntülenir ve 'startQuiz' ile 'onStart' prop'u olarak iletilir. */}
      {step === "intro" && <Intro onStart={startQuiz} />}

      {/* Quiz ekranı: Eğer 'step' durumu "quiz" ise, <Quiz> görüntülenir. 'questions' prop'u ile quiz soruları geçirilir ve 'finishQuiz' ile 'onFinish' prop'u olarak iletilir. */}
      {step === "quiz" && <Quiz questions={questions} onFinish={finishQuiz} />}

      {/* Sonuç ekranı: Eğer 'step' durumu "result" ise, <Result>  görüntülenir. 'results' ve 'correctAnswers' prop'ları sonuçları döner. */}
      {step === "result" && (
        <Result results={results} correctAnswers={correctAnswers} />
      )}
    </div>
  );
}

export default App;
