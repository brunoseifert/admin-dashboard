import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './Sidebar';

const Header = ({ open, handleOpen }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="">
        <button
          onClick={handleOpen}
          className="px-8 text-sm mt-4 justify-start"
        >
          <FontAwesomeIcon icon="fa-solid fa-bars" className="text-cyan-50" />
        </button>
        <div
          className={`text-white pr-4 mt-8 ml-4 ease-in-out duration-500 ${
            open ? 'fixed left-4 w-44' : 'overflow-hidden fixed -left-full w-0'
          }`}
        >
          <Sidebar />
        </div>
      </div>
      <div className="px-8 mt-4">
        <FontAwesomeIcon icon="fa-solid fa-user" className="p-1 text-cyan-50" />
        <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1 text-cyan-50" />
      </div>
    </div>
  );
};

export default Header;
