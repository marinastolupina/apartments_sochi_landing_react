export default function AmenitiesList() {
    return (
              <section className="amenities" aria-label="Удобства в апартаментах">
        <div className="wrapper">
          <h2 className="amenities__heading">В любых наших апартаментах:</h2>
          <ul className="amenities__list">
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/air_conditioner.webp" alt="Европейские кондиционеры"
                loading="lazy" />
              <h3 className="amenities__title">европейские<br />кондиционеры</h3>
            </li>
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/coffee_machine.webp" alt="Технологичная кухня"
                loading="lazy" />
              <h3 className="amenities__title">технологичная<br />кухня</h3>
            </li>
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/tv.webp" alt="Огромный телевизор" loading="lazy" />
              <h3 className="amenities__title">огромный<br />телевизор</h3>
            </li>
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/double_bed.webp" alt="Двуспальная кровать" loading="lazy" />
              <h3 className="amenities__title">двуспальная<br />кровать</h3>
            </li>
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/view_terrace.webp" alt="Видовая терраса" loading="lazy" />
              <h3 className="amenities__title">видовая<br />терраса</h3>
            </li>
            <li className="amenities__item">
              <img className="amenities__icon" src="/icons/scandinavian_interior.webp" alt="Скандинавский интерьер"
                loading="lazy" />
              <h3 className="amenities__title">скандинавский<br />интерьер</h3>
            </li>
          </ul>
        </div>
      </section>
    );
}