import React from "react";
import PopupWithForm from "../components/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace}) {

   const [name, setName] = React.useState('');
   const [link, setLink] = React.useState('');

   function handleNameChange(e) {
      setName(e.target.value);
   }

   function handleLinkChange(e) {
      setLink(e.target.value);
   }

   function handleSubmit (e) {
      e.preventDefault();
      onAddPlace({
         name,
         link
      })
      setName('');
      setLink('');
   }

   return(
      <PopupWithForm
         name={"add"}
         title={"Новое место"}
         buttonText={"Сохранить"}
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <label className="popup__field">
            <input 
               id="card-name-input" 
               name="name" 
               type="text" 
               className="popup__input popup__input_type_card-name" 
               placeholder="Название" 
               required 
               minLength="2" 
               maxLength="30"
               value={name}
               onChange={handleNameChange}
            />
            <span className="card-name-input-error popup__input-error" />
         </label>
         <label className="popup__field">
            <input 
               id="link-input" 
               name="link" 
               type="url" 
               className="popup__input popup__input_type_link" 
               placeholder="Ссылка на картинку" 
               required
               value={link}
               onChange={handleLinkChange}
            />
            <span className="link-input-error popup__input-error" />
         </label>
      </PopupWithForm>
   )
}

export default AddPlacePopup;
