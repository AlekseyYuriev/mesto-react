import React from "react";

function ImagePopup({card, onClose}) {
   return (
      <aside className={`popup popup_dark popup_type_bigcard ${card ? 'popup_opend' : ''}`}>
         <div className="popup__card">
            <button 
               type="button" 
               aria-label="закрыть" 
               className="popup__close-button popup__close-button_type_bigcard"
               onClick={onClose}>
            </button>
            <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__image" />
            <h4 className="popup__card-name">{card ? card.name : ''}</h4>
         </div>
      </aside>
   )
}

export default ImagePopup;