export default function Gallery() {
    return (
        <section className="gallery" aria-label="Фотографии апартаментов">
        <div className="gallery__list">
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/dining-area.webp" alt="Апартаменты «Фэмили» с обеденной зоной"
              loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/cozy-apartments-in-light-colors.webp" alt="Апартаменты «Уйат»"
              loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/apartments-on-the-river-bank.webp"
              alt="Комплекс с апартаментами у реки" loading="lazy" />
          </figure>

          <figure className="gallery__item">
            <img className="gallery__image" src="/images/modern-apartments.webp" alt="Апартаменты «Модерн»"
              loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/apartments-with-maximum-glazing.webp"
              alt="Апартаменты «Соло» с максимальным остеклением гостиной" loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/home-style-apartments.webp" alt="Апартаменты «Домашний уют»"
              loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/living-room-with-panoramic-window.webp"
              alt="Апартаменты «Саншайн» с панорамным окном" loading="lazy" />
          </figure>
          <figure className="gallery__item">
            <img className="gallery__image" src="/images/apartment-with-a-view-terrace.webp"
              alt="Апартаменты с видовой террасой" loading="lazy" />
          </figure>
        </div>
      </section>
    );
}