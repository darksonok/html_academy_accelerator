import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  secondPath?: {
    name: string;
    path: string;
  };
  thirdPath?: string;
}

function Breadcrumbs ( {secondPath, thirdPath}: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={'/'}>Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          {secondPath &&
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={secondPath.path}>{secondPath.name}
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>}
          {thirdPath &&
          <li className="breadcrumbs__item"><span>{thirdPath}</span>
          </li>}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
