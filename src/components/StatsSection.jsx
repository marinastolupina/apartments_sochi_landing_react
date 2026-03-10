export default function StatsSection() {
    return (
        <section className="stats" aria-label="Наши преимущества">
        <div className="wrapper wrapper-gray">
          <div className="stats__list">
            <div className="stats__item" role="group" aria-label="1 минута до пляжа">
              <span className="stats__number">1</span>
              <span className="stats__unit">минута</span>
              <span className="stats__desc">до пляжа</span>
            </div>
            <div className="stats__item" role="group" aria-label="57 объектов на выбор">
              <span className="stats__number">57</span>
              <span className="stats__unit">объектов</span>
              <span className="stats__desc">на выбор</span>
            </div>
            <div className="stats__item" role="group" aria-label="Оценку 5 ставят наши гости">
              <span className="stats__number">"5"</span>
              <span className="stats__unit">ставят</span>
              <span className="stats__desc">наши гости</span>
            </div>
            <div className="stats__item" role="group" aria-label="Находимся на связи 24 часа">
              <span className="stats__number">24</span>
              <span className="stats__unit">часа</span>
              <span className="stats__desc">на связи</span>
            </div>
          </div>
        </div>
      </section>
    );
}