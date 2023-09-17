import React from "react";

function Main ({onEditProfile, onAddPlace, onEditAvatar, userName, userDescription, userAvatar, children}) {

   return (
      <main>
         <section className="profile">
            <div className="profile__content">
               <img 
               src={userAvatar} 
               alt={userName} 
               className="profile__avatar" />
               <button 
                  type="button" 
                  className="profile__edit-avatar-button" 
                  onClick={onEditAvatar}>
               </button>
               <div className="profile__info">
                  <div className="profile__wrapper">
                     <h1 className="profile__name">{userName}</h1>
                     <button type="button" aria-label="редактировать профиль" className="profile__edit-button link" onClick={onEditProfile}></button>
                  </div>
                  <p className="profile__description">{userDescription}</p>
               </div>
            </div>
            <button type="button" aria-label="добавить карточку" className="profile__add-button link" onClick={onAddPlace}></button>
         </section>
         <section className="elements">
            {children}
         </section>
         <template className="card-template">
            <div className="element">
               <button type="reset" aria-label="удалить карточку" className="element__delete-button"></button>
               <img src="#" alt="" className="element__image"/>
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