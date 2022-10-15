import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';


describe('Footer component', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const headerElement = screen.getByText('Интернет-магазин фото- и видеотехники');
    const navigationHeaderElement = screen.getByText('Навигация');
    const catalogElement = screen.getByText('Каталог');
    const guaranteeElement = screen.getByText('Гарантии');
    const deliveryElement = screen.getByText('Доставка');
    const aboutElement = screen.getByText('О компании');
    const resourcesElement = screen.getByText('Ресурсы');
    const coursesElement = screen.getByText('Курсы операторов');
    const blogElement = screen.getByText('Блог');
    const communityElement = screen.getByText('Сообщество');
    const supportElement = screen.getByText('Поддержка');
    const faqElement = screen.getByText('FAQ');
    const askQuestionElement = screen.getByText('Задать вопрос');

    expect(headerElement).toBeInTheDocument();
    expect(navigationHeaderElement).toBeInTheDocument();
    expect(catalogElement).toBeInTheDocument();
    expect(guaranteeElement).toBeInTheDocument();
    expect(deliveryElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(resourcesElement).toBeInTheDocument();
    expect(coursesElement).toBeInTheDocument();
    expect(blogElement).toBeInTheDocument();
    expect(communityElement).toBeInTheDocument();
    expect(supportElement).toBeInTheDocument();
    expect(faqElement).toBeInTheDocument();
    expect(askQuestionElement).toBeInTheDocument();
  });
});
