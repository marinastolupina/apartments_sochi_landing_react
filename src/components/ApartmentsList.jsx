export default function ApartmentsList() {
    return (
              <section className="apartments" aria-label="Наши апартаменты">
        <div className="wrapper">
          <h2 className="apartments__heading">Апартаменты для наших гостей:</h2>
          <div className="apartments__list">
            <article className="apartments__item">
              <img className="apartments__image" src={import.meta.env.BASE_URL + 'images/apartment_with_sea_view.webp'} 
                alt="Апартаменты «Солнечные» с видом на море" width="350" height="350" loading="lazy" />
              <h3 className="apartments__title">"Солнечные"</h3>
            </article>
            <article className="apartments__item">
              <img className="apartments__image" src={import.meta.env.BASE_URL + 'images/apartment_with_terrace.webp'}
                alt="Апартаменты «Морской бриз» с террасой" width="350" height="350" loading="lazy" />
              <h3 className="apartments__title">"Морской бриз"</h3>
            </article>
            <article className="apartments__item">
              <img className="apartments__image" src={import.meta.env.BASE_URL + 'images/apartments_with_panoramic_windows.webp'} 
                alt="Апартаменты «Панорама» с панорамными окнами" width="350" height="350" loading="lazy" />
              <h3 className="apartments__title">"Панорама"</h3>
            </article>
          </div>
        </div>
      </section>
    );
}