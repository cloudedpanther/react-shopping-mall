import { useLocation, useParams } from 'react-router-dom';
import { getCurrenPath } from '../../utils/path';

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const pageHistory = getCurrenPath(pathname, Number(id));

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {pageHistory.map((pageName) => {
          return <li key={pageName}>{pageName}</li>;
        })}
      </ul>
    </div>
  );
}
