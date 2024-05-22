import React from "react";

// Seçenek butonlarının import edilmesi
import OptionButton from "./OptionButton";

// Seçenek butonlarının oluşturulması
function Options({ options, onSelect }) {
  return (
    <div id="options" className="options">
      {options.map((option, index) => (
        <OptionButton
          key={index}
          option={option}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

export default Options;
