import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="content">
      <div className="container">
        <div className="container__item container__item-workers">
          <Link to='/login' className="container_btn container_btn-workers">
            Find workers
          </Link>
        </div>
        <div className="container__item container__item-jobs">
          <Link to='/login' className="container_btn container_btn-jobs">
            Find jobs
          </Link>
        </div>
      </div>
    </div>
  );
}