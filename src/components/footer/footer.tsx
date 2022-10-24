import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './footer.css';

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Link
            className="footer__logo"
            to={'/'}
            aria-label="Переход на главную"
          >
            <svg width="100" height="36" aria-hidden="true">
              <use xlinkHref="#icon-logo-mono"></use>
            </svg>
          </Link>
          <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
          <ul className="social">
            <li className="social__item">
              <a className="link" href="https://vk.com" aria-label="Переход на страницу вконтатке">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-vk"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a className="link" href="https://ru.pinterest.com" aria-label="Переход на страницу pinterest">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-pinterest"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a className="link" href="https://www.reddit.com" aria-label="Переход на страницу reddit">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-reddit"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <p className="footer__title">Навигация</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  className="link"
                  to={'/catalog/1'}
                >
                  Каталог
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Guarantee}
                >
                    Гарантии
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Delivery}
                >
                  Доставка
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.About}
                >
                  О компании
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Ресурсы</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Courses}
                >
                  Курсы операторов
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Blog}
                >
                  Блог
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Community}
                >
                  Сообщество
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Поддержка</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Faq}
                >
                    FAQ
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  className="link"
                  to={AppRoute.Ask}
                >
                    Задать вопрос
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
