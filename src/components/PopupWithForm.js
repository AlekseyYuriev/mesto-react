import React from "react";

function PopupWithForm({name, title, buttonText, isOpen, children, onClose}) {


   return (
      <aside className={isOpen ? `popup popup_type_${name} popup_opend` : `popup popup_type_${name}`}>
         <div className="popup__container">
            <button 
               type="button" 
               aria-label="закрыть" 
               className="popup__close-button popup__close-button_type_profile" 
               onClick={onClose} />
            <h3 className="popup__title">{title}</h3>
            <form name={name} className="popup__form popup__form_type_delete">
               {children}
               <button className="popup__save-button popup__submit-button" type="submit">{buttonText}</button>
            </form>
         </div>
      </aside>
   )
}

export default PopupWithForm;