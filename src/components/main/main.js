import React from "react";
import avatarImg from "../../images/avatar.png"

function Main () {

   function handleEditAvatarClick() {
      document.querySelector('.popup_type_edit').classList.add('popup_opend');
   }

   function handleEditProfileClick() {
      document.querySelector('.popup_type_avatar').classList.add('popup_opend');
   }

   function handleAddPlaceClick() {
      document.querySelector('.popup_type_add').classList.add('popup_opend');
   }

   return (
      <main>
         <section className="profile">
            <div className="profile__content">
               <img src={avatarImg} alt="Жак-Ив Кусто" className="profile__avatar" />
               <button type="button" className="profile__edit-avatar-button" onClick={handleEditProfileClick}></button>
               <div className="profile__info">
                  <div className="profile__wrapper">
                     <h1 className="profile__name">Жак-Ив Кусто</h1>
                     <button type="button" aria-label="редактировать профиль" className="profile__edit-button link" onClick={handleEditAvatarClick}></button>
                  </div>
                  <p className="profile__description">Исследователь океана</p>
               </div>
            </div>
            <button type="button" aria-label="добавить карточку" className="profile__add-button link" onClick={handleAddPlaceClick}></button>
         </section>
         <section className="elements">
         </section>
         <template className="card-template">
            <div className="element">
               <button type="reset" aria-label="удалить карточку" className="element__delete-button"></button>
               <img src="#" alt="" className="element__image" />
               <div className="element__group">
                  <h2 className="element__title"></h2>
                  <div className="element__counter">
                     <button type="button" aria-label="лайкнуть карточку" className="element__like-button"></button>
                     <p className="element__like-number"></p>
                  </div>
               </div>
            </div>
         </template>
      </main>
   )
}

export default Main;