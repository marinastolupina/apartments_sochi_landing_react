export default function BookingModal({ isOpen, onClose, showSuccess, onSubmit }) {
    if (!isOpen) return null;

    return (
          <div className="modal" role="dialog" aria-modal="true">
          <div className="modal__overlay" onClick={onClose}></div>
          <div className="modal__content">
            <button className="modal__close" type="button" onClick={onClose}>&times;</button>
            <h2 id="modalTitle" className="modal__title">Выбор апартаментов</h2>

            <form
              className="modal__form" noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="checkIn">Дата заезда</label>
                <input type="date" id="checkIn" name="checkIn" required />
              </div>
              <div className="form-group">
                <label htmlFor="checkOut">Дата выезда</label>
                <input type="date" id="checkOut" name="checkOut" required />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Количество гостей</label>
                <select name="guests" id="guests" required>
                  <option value="">-</option>
                  <option value="1">1 гость</option>
                  <option value="2">2 гостя</option>
                  <option value="3">3 гостя</option>
                  <option value="4">4 гостя</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Номер телефона</label>
                <input type="tel" id="phone" name="phone" placeholder="+7900 500 30 20" aria-describedby="phone-hint" />
                <p className="phone-hint" id="phone-hint">для отправки ссылки с подборкой апартаментов</p>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Комментарий (необязательно)</label>
                <textarea name="comment" id="comment" rows="3"></textarea>
              </div>
              <button className="modal__submit" type="submit">Выслать подборку апартаментов</button>
              {showSuccess && (
                <p className="modal__success">В течение 5 минут на указанный номер телефона придет
                  ссылка с подборкой апартаментов.</p>
              )}
            </form>
          </div>
        </div>
  );
}
