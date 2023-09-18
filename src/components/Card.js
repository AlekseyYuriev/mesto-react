import React from "react";

function Card ({card, onCardClick}) {

   function handleClick() {
      onCardClick(card);
   }

   return (
      <div className="element">
         <button type="reset" aria-label="удалить карточку" className="element__delete-button" />
         <img 
            src={card.link} 
            alt={card.name} 
            className="element__image"
            onClick={handleClick}
            />
         <div className="element__group">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__counter">
               <button type="button" aria-label="лайкнуть карточку" className="element__like-button" />
               <p className="element__like-number">{card.likes.length}</p>
            </div>
         </div>
      </div>
   )
}

export default Card;