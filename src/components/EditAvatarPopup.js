import React from "react";
import { useRef } from 'react';
import PopupWithForm from "../components/PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {

   const avatarInfo = useRef();

   function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
         link: avatarInfo.current.value
      });
   } 

   return(
      <PopupWithForm
         name={"avatar"}
         title={"Обновить аватар"}
         buttonText={"Сохранить"}
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <label className="popup__field">
            <input 
               ref={avatarInfo} 
               id="link-avatar" 
               name="link" 
               type="url" 
               className="popup__input popup__input_type_link" 
               placeholder="Ссылка на картинку аватара" 
               required
            />
            <span className="link-avatar-error popup__input-error" />
         </label>
      </PopupWithForm>
   )
}

export default EditAvatarPopup;