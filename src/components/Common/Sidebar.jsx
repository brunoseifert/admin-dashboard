import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col mx-3 h-full">
      <ul className="flex flex-col text-lg text-blue-50 font-normal gap-5 pr-8">
        <li>
          <Link to="/">Admin</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
