import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImagePopup from '../components/ImagePopup';
import PopupWithForm from '../components/PopupWithForm';
import api from '../utils/Api';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup ';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    "name": 'Жак-Ив Кусто',
    "about": 'Исследователь океана',
    "avatar": 'url(../../images/avatar.png)'
  });

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);  
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Проверяем, ставили ли мы лайк на карточку, отправляем запрос в API и получаем обновлённые данные карточки
    if(isLiked) {
      api.deleteLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })} else {
      api.setLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }
}

function handleCardDelete(card) {
  api.deleteCard(card._id).then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id))
  })
}

  useEffect(() => {
    api.getUserData().then((currentUser) => {
      setcurrentUser(currentUser);
    })
  }, []);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    })
  }, []);

  const handleUpdateUser = (userInfo) => {
    api.setUserData(userInfo).then((newUserInfo) => {
      setcurrentUser(newUserInfo);
      closeAllPopups();
    })
  }

  const handleUpdateAvatar = (avatarLink) => {
    api.updateAvatar(avatarLink).then((newAvatar) => {
      setcurrentUser(newAvatar);
      closeAllPopups();
    })
  }
  
  const handleAddPlaceSubmit = (cardInfo) => {
    api.createNewCard(cardInfo).then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups();
    })  
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userName={currentUser.name}
          userDescription={currentUser.about} 
          userAvatar={currentUser.avatar} >
            {cards.map((item) => (
              <Card
                key={item._id}
                card={item}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete} />
            ))}
          </Main>
        <Footer />
        <ImagePopup
          card={selectedCard} 
          onClose={closeAllPopups} 
        />
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        /> 
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm
          name={"confirm"}
          title={"Вы уверены?"}
          buttonText={"Да"}
        >
        </PopupWithForm>
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
