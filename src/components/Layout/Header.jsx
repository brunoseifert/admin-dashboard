import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header>
      <div>
        <div className="flex w-[100px] justify-between">
          <div>
            <button
              onClick={() => console.log('menu toggle')}
              className="px-3 text-sm"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-user" className="p-1" />
            <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
