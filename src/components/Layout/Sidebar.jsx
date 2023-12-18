import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-4">
        <li className="mb-4 ml-4">Menu</li>
        <div className="flex flex-col gap-4 border-r pr-4">
          <li>
            <Link to="/usuario" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <span>Usuário</span>
            </Link>
          </li>
          <li>
            <Link to="/e-commerce" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
              <span>E-commerce</span>
            </Link>
          </li>
          <li>
            <Link to="/e-mail" className="flex gap-2 items-center">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <span>E-mail</span>
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
