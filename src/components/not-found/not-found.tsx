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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
