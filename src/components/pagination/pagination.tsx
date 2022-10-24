import { getCameras } from '../../store/selectors';
import { getPaginationPages } from '../../utils';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import './pagination.css';

function Pagination () {

  const { pageId } = useParams();
  const cameras = useAppSelector(getCameras);
  const pages = getPaginationPages(cameras);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {Number(pageId) !== 1
        &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link"
            to={`/catalog/${Number(pageId) - 1}`}
          >
            Назад
          </Link>
        </li>}
        {pages.map((page) => (
          <li
            key={`pagination_page-${page}`}
            className="pagination__item"
          >
            <Link
              className={`pagination__link pagination__link${page === Number(pageId) ? '--active' : ''}`}
              to={`/catalog/${page}`}
            >
              {page}
            </Link>
          </li>)
        )}
        {pages.length > Number(pageId)
        &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link"
            to={`/catalog/${Number(pageId) + 1}`}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
