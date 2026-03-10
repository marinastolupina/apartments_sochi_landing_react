export default function ContactsSection() {
    return (
              <section className="contacts" aria-label="Контактная информация">
        <div className="wrapper">
          <h2 className="contacts__heading">Контакты</h2>
          <address className="contacts__list">
            <div className="contacts__item">
              <img className="contacts__icon" src={import.meta.env.BASE_URL + 'icons/adres.svg'} alt="Адрес" />
              <div className="contacts__label">адрес:</div>
              <ul className="contacts__value">
                <li>улица Приморская</li>
                <li>офис 17</li>
              </ul>
            </div>
            <div className="contacts__item">
              <img className="contacts__icon" src={import.meta.env.BASE_URL + 'icons/phone.svg'} alt="Телефон" />
              <div className="contacts__label">телефон:</div>
              <ul className="contacts__value contacts__value--list">
                <li><a href="tel:88001258080" className="contacts__link">8800-125-80-80</a></li>
                <li><a href="tel:88001258090" className="contacts__link">8800-125-80-90</a></li>
              </ul>
            </div>
            <div className="contacts__item">
              <img className="contacts__icon" src={import.meta.env.BASE_URL + 'icons/clock.svg'} alt="Время работы" />
              <div className="contacts__label">время работы:</div>
              <ul className="contacts__value">
                <li>Пн-Вск</li>
                <li>круглосуточно</li>
              </ul>
            </div>
            <div className="contacts__item">
              <img className="contacts__icon" src={import.meta.env.BASE_URL + 'icons/mail.svg'} alt="Email" />
              <div className="contacts__label">e-mail:</div>
              <ul className="contacts__value contacts__value--list">
                <li><a href="mailto:info@apartments-sochi.ru"
                  className="contacts__link">info@apartments-sochi.ru</a></li>
                <li><a href="mailto:dir@apartments-sochi.ru" className="contacts__link">dir@apartments-sochi.ru</a>
                </li>
              </ul>
            </div>
          </address>
        </div>
      </section>
    );
}