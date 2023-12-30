import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-4">
        <li className="mb-4 ml-4">Menu</li>
        <div className="flex flex-col gap-4 border-r pr-4">
          <li>
            <Link to="/dashboard" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/e-commerce" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
              <span>E-commerce</span>
            </Link>
          </li>
          <li>
            <Link to="/localizacao" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
              <span>Localização</span>
            </Link>
          </li>
          <li>
            <Link to="/calendario" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
              <span>Calendário</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
