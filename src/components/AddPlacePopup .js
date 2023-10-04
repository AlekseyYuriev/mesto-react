import React, { useEffect, useState } from "react";
import PopupWithForm from "../components/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace}) {

   const [name, setName] = useState('');
   const [link, setLink] = useState('');
   const [nameDirty, setNameDirty] = useState(false);
   const [linkDirty, setLinkDirty] = useState(false);
   const [nameError, setNameError] = useState('Укажите название места');
   const [linkError, setLinkError] = useState('Укажите URL картинки');
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if(nameError || linkError) {
         setFormValid(false)
      } else {
         setFormValid(true)
      }
   }, [nameError, linkError])

   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'name':
            setNameDirty(true)
            break
         case 'link':
            setLinkDirty(true)
            break
      }
   }

   const handleNameChange = (e) => {
      setName(e.target.value);
      if(e.target.value.length < 2 || e.target.value.length > 30) {
         setNameError('Название места должно быть длиннее 2 и короче 30 символов')
         if(!e.target.value) {
            setNameError('Укажите название места')
         }
      } else {
         setNameError('')
      }
   }

   const handleLinkChange = (e) => {
      setLink(e.target.value);
      if(!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(e.target.value)) {
         setLinkError('Введите корректный URL');
      } else {
         setLinkError('');
      }
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
         isFormInvalid={formValid}
      >
         <label className="popup__field">
            <input 
               id="card-name-input" 
               name="name" 
               type="text" 
               className="popup__input popup__input_type_card-name" 
               placeholder="Название" 
               value={name}
               onChange={e => handleNameChange(e)}
               onBlur={e => blurHandler(e)}
            />
            <div className="card-name-input-error popup__input-error">
               {(nameDirty && nameError) && <span>{nameError}</span>}
            </div>
            
         </label>
         <label className="popup__field">
            <input 
               id="link-input" 
               name="link" 
               type="url" 
               className="popup__input popup__input_type_link" 
               placeholder="Ссылка на картинку" 
               value={link}
               onChange={e => handleLinkChange(e)}
               onBlur={e => blurHandler(e)}
            />
            <div className="link-input-error popup__input-error">
               {(linkDirty && linkError) && <span>{linkError}</span>}
            </div>
            
         </label>
      </PopupWithForm>
   )
}

export default AddPlacePopup;
