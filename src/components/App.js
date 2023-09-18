import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImagePopup from '../components/ImagePopup';
import PopupWithForm from '../components/PopupWithForm';
import api from '../utils/Api';
import Card from '../components/Card';

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


  return (
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
                onCardClick={handleCardClick} />
            ))}
          </Main>
        <Footer />
        <ImagePopup
          card={selectedCard} 
          onClose={closeAllPopups} />
        <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="name-input" name="name" type="text" placeholder="Имя" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
            <span className="name-input-error popup__input-error" />
          </label>
          <label className="popup__field">
            <input id="about-input" name="about" type="text" placeholder="О себе" className="popup__input popup__input_type_description" required minLength="2" maxLength="200" />
            <span className="about-input-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
        name={"add"}
        title={"Новое место"}
        buttonText={"Сохранить"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="card-name-input" name="name" type="text" className="popup__input popup__input_type_card-name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="card-name-input-error popup__input-error" />
          </label>
          <label className="popup__field">
            <input id="link-input" name="link" type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
            <span className="link-input-error popup__input-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
        name={"confirm"}
        title={"Вы уверены?"}
        buttonText={"Да"}>
        </PopupWithForm>
        <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="link-avatar" name="link" type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку аватара" required />
            <span className="link-avatar-error popup__input-error" />
          </label>
        </PopupWithForm>
      </div>
  );
}

export default App;
