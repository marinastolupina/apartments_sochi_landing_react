export default function FooterSection() {
    return (
        <footer className="footer" aria-label="Подвал сайта">
        <div className="wrapper">
          <div className="footer__content">
            <div className="footer__copyright">
              <span>© ООО "Apartments-Sochi"</span>
            </div>
            <div className="footer__developer">
              <span>разработка сайта: <a href="https://github.com/marinastolupina" className="footer__link">Marina
                Stolupina</a></span>
            </div>
          </div>
        </div>
      </footer>
    );
}