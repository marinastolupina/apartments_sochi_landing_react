export default function Reviews() {
    return (
              <section className="reviews" aria-label="Отзывы гостей">
        <div className="wrapper">
          <h2 className="reviews__heading">отзывы любимых клиентов</h2>
          <div className="reviews__list">
            <article className="reviews__item">
              <h3 className="visually-hidden">Отзыв от Василия Леонидова</h3>
              <p className="reviews__text">Отличное место! Уютно, чисто, рядом пляж. Приедем снова!</p>
              <p className="reviews__author">Василий Леонидов</p>
            </article>
            <article className="reviews__item">
              <h3 className="visually-hidden">Отзыв от Марии Шаровой</h3>
              <p className="reviews__text">Жили всей семьёй. Детям особенно понравилась терраса.</p>
              <p className="reviews__author">Мария Шарова</p>
            </article>
            <article className="reviews__item">
              <h3 className="visually-hidden">Отзыв от Максима Конина</h3>
              <p className="reviews__text">Лучший отдых в Сочи за последние годы. Огромное спасибо!</p>
              <p className="reviews__author">Максим Конин</p>
            </article>
          </div>
        </div>
      </section>
    );
}