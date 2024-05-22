import React from "react";

// Uygulama çalıştığında karşımıza çıkan fonksiyon
function Intro({ onStart }) {
  return (
    <div className="intro">
      <h1>Teste Hoşgeldiniz!</h1>
      <p>
        Bu test 10 sorudan oluşmaktadır. Her soru için 30 saniyeniz var. İlk 10
        saniye içinde cevap şıkları görünmeyecek.
      </p>
      <p className="dream">Sorular hayal ürünü değildir !</p>
      <p>Başarılar!</p>
      <button id="start" onClick={onStart}>
        Teste Başla
      </button>
    </div>
  );
}

export default Intro;
