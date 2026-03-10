export default function CtaSection({ onOpenModal }) {
    return (
        <section className="cta" aria-label="Связаться с нами">
        <div className="wrapper">
          <div className="cta__content">
            <div className="cta__text">
              <h3 className="cta__title">Сказочный отдых с шикарными видами</h3>
              <p className="cta__subtitle">Реализуем самые смелые желания</p>
            </div>
            <div className="cta__actions">
              <button type="button" className="cta__button" onClick={onOpenModal}>Выбрать апартаменты</button>
            </div>
          </div>
        </div>
      </section>
    );
}