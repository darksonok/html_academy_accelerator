import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import Header from '../header/header';

function NotFound () {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">К сожалению, такой страницы не существует</h1>
              <h2> Кстати там наверху все так же есть крутая камера </h2>
              <h3>Но если хотите, можете вернуться на <Link className="main-nav__link" to={AppRoute.Main}>Главную</Link></h3>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
