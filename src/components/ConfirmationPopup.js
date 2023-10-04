import React from "react";
import PopupWithForm from "../components/PopupWithForm";

function ConfirmationPopup ({ isOpen, onClose, onCardDelete, card }) {

   const handleSubmit = (e) => {
      e.preventDefault();
      onCardDelete(card);
   }

   let isValid = true;

   return(
      <PopupWithForm
         isOpen={isOpen}
         onClose={onClose}
         name={"confirm"}
         title={"Вы уверены?"}
         buttonText={"Да"}
         onSubmit={handleSubmit}
         isFormInvalid={isValid}
      />
   )
}

export default ConfirmationPopup;