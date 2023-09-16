
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

function App() {
  return (
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        <aside className="popup popup_dark popup_type_bigcard">
          <div className="popup__card">
            <button type="button" aria-label="закрыть" className="popup__close-button popup__close-button_type_bigcard"></button>
            <img src="#" alt="" className="popup__image" />
            <h4 className="popup__card-name"></h4>
          </div>
        </aside>
        <aside className="popup popup_type_edit">
          <div className="popup__container">
            <button type="button" aria-label="закрыть" className="popup__close-button popup__close-button_type_profile"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <form name="form" action="#" className="popup__form popup__form_type_edit" noValidate>
              <label className="popup__field">
                <input id="name-input" name="name" type="text" placeholder="Имя" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
                <span className="name-input-error popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="about-input" name="about" type="text" placeholder="О себе" className="popup__input popup__input_type_description" required minLength="2" maxLength="200" />
                <span className="about-input-error popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </aside>
        <aside className="popup popup_type_add">
          <div className="popup__container">
            <button type="button" aria-label="закрыть" className="popup__close-button popup__close-button_type_card"></button>
            <h3 className="popup__title">Новое место</h3>
            <form name="form" action="#" className="popup__form popup__form_type_add" noValidate>
              <label className="popup__field">
                <input id="card-name-input" name="name" type="text" className="popup__input popup__input_type_card-name" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="card-name-input-error popup__input-error"></span>
              </label>
              <label className="popup__field">
                <input id="link-input" name="link" type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
                <span className="link-input-error popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </aside>
        <aside className="popup popup_type_confirm">
          <div className="popup__container">
            <button type="button" aria-label="закрыть" className="popup__close-button popup__close-button_type_confirm"></button>
            <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
            <form name="form" className="popup__form popup__form_type_delete">
              <button className="popup__confirm-button popup__submit-button" type="submit">Да</button>
            </form>
          </div>
        </aside>
        <aside className="popup popup_type_avatar">
          <div className="popup__container">
            <button type="button" aria-label="закрыть" className="popup__close-button popup__close-button_type_confirm"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <form name="form" action="#" className="popup__form popup__form_type_update" noValidate>
              <label className="popup__field">
                <input id="link-avatar" name="link" type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку аватара" required />
                <span className="link-avatar-error popup__input-error"></span>
              </label>
              <button className="popup__save-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </aside>
      </div>
  );
}

export default App;
