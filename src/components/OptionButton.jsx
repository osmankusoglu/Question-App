import React from "react";

//Seçeneklerin(cevapların) buton olarak çalıştığı kısım
function OptionButton({ option, onClick }) {
  return (
    <button className="option" onClick={onClick}>
      {option}
    </button>
  );
}

export default OptionButton;
