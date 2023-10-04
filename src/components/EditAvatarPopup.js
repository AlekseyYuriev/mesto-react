import { useRef } from 'react';
import PopupWithForm from "../components/PopupWithForm";
import { useForm } from "react-hook-form";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {

   const avatarInfo = useRef();

   const {
      register, 
      handleSubmit, 
      formState: { errors, isValid }, 
      reset,
   } = useForm({mode: 'onBlur'});

   const textRegister = register('link', {
      required: {
         value: true,
         message: "Поле обязательно для заполнения",
      },
      pattern: {
         value: /^(https:|http:|www\.)\S*/gm,
         message: "Введите URL",
      },
   })

   const onSubmit = (data) => {

      onUpdateAvatar({
         link: data.link
      });
      reset();
   } 

   return(
      <PopupWithForm
         name={"avatar"}
         title={"Обновить аватар"}
         buttonText={"Сохранить"}
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit(onSubmit)}
         isFormInvalid={isValid}
      >
         <label className="popup__field">
            <input 
               ref={avatarInfo} 
               id="link-avatar" 
               className="popup__input popup__input_type_link" 
               placeholder="Ссылка на картинку аватара" 
               {...textRegister}
            />
            <div className="name-input-error popup__input-error">
               {errors.link && <span>{errors.link.message}</span>}
            </div>
         </label>
      </PopupWithForm>
   )
}

export default EditAvatarPopup;