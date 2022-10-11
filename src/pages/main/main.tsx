import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Main () {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Привет, это главная страница, но ее дизайна не было, по этому пока вот так, лучше ткните на каталог</h1>
              <h2> Кстати там наверху еще камера крутая </h2>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;

