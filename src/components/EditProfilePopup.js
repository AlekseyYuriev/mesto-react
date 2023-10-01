import React from "react";
import PopupWithForm from "../components/PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

   const currentUser = React.useContext(CurrentUserContext);

   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('');

   React.useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
   }, [currentUser]);

   function handleNameChange(e) {
      setName(e.target.value);
   }

   function handleDescriptionChange(e) {
      setDescription(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
   
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
         name,
         about: description,
      });
   }

   return(
      <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
         <label className="popup__field">
            <input 
            id="name-input" 
            name="name" 
            type="text" 
            placeholder="Имя" 
            className="popup__input popup__input_type_name" 
            required 
            minLength="2" 
            maxLength="40"
            value={name}
            onChange={handleNameChange} />
            <span className="name-input-error popup__input-error" />
         </label>
         <label className="popup__field">
            <input 
            id="about-input" 
            name="about" 
            type="text" 
            placeholder="О себе" 
            className="popup__input popup__input_type_description" 
            required 
            minLength="2" 
            maxLength="200"
            value={description}
            onChange={handleDescriptionChange} />
            <span className="about-input-error popup__input-error" />
         </label>
      </PopupWithForm>
   )
}

export default EditProfilePopup;