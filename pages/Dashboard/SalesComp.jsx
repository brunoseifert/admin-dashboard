import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './customScroll.css';

const SalesComp = () => {
  const recentSales = [
    {
      id: 1,
      name: 'John Doe',
      product: 'Monitor LED 24"',
      price: 'R$ 456,99',
      date: '2023-08-01',
      email: 'john@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user" />,
    },
    {
      id: 2,
      name: 'Jane Doe',
      product: 'Teclado Mecânico RGB',
      price: 'R$ 122,00',
      date: '2023-08-02',
      email: 'jane@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-graduate" />,
    },
    {
      id: 3,
      name: 'Bob Smith',
      product: 'Monitor Curvo 27"',
      price: 'R$ 1.200,00',
      date: '2023-08-03',
      email: 'bob@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-secret" />,
    },
    {
      id: 4,
      name: 'Alice Johnson',
      product: 'Mouse sem Fio',
      price: 'R$ 110,00',
      date: '2023-08-04',
      email: 'alice@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-ninja" />,
    },
    {
      id: 5,
      name: 'Charlie Brown',
      product: 'Headset Gamer 7.1',
      price: 'R$ 250,00',
      date: '2023-08-05',
      email: 'charlie@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />,
    },
    {
      id: 6,
      name: 'Eva Williams',
      product: 'Teclado Mecânico TKL',
      price: 'R$ 300,00',
      date: '2023-08-06',
      email: 'eva@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-nurse" />,
    },
    {
      id: 7,
      name: 'David Lee',
      product: 'Monitor LED 27"',
      price: 'R$ 1.000,00',
      date: '2023-08-07',
      email: 'david@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-graduate" />,
    },
    {
      id: 8,
      name: 'Sophia Moore',
      product: 'Mouse Óptico',
      price: 'R$ 50,00',
      date: '2023-08-08',
      email: 'sophia@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-tie" />,
    },
    {
      id: 9,
      name: 'Oliver Taylor',
      product: 'Headset Bluetooth',
      price: 'R$ 300,00',
      date: '2023-08-09',
      email: 'oliver@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />,
    },
    {
      id: 10,
      name: 'Emma Davis',
      product: 'Teclado Wireless',
      price: 'R$ 150,00',
      date: '2023-08-10',
      email: 'emma@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-ninja" />,
    },
    {
      id: 11,
      name: 'Liam Anderson',
      product: 'Mouse Gamer',
      price: 'R$ 200,00',
      date: '2023-08-11',
      email: 'liam@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-secret" />,
    },
    {
      id: 12,
      name: 'Ava Brown',
      product: 'Monitor Ultrawide 34"',
      price: 'R$ 2.000,00',
      date: '2023-08-12',
      email: 'ava@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-ninja" />,
    },
    {
      id: 13,
      name: 'Noah White',
      product: 'Headset Noise Cancelling',
      price: 'R$ 500,00',
      date: '2023-08-13',
      email: 'noah@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-graduate" />,
    },
    {
      id: 14,
      name: 'Isabella Harris',
      product: 'Teclado Retroiluminado',
      price: 'R$ 150,00',
      date: '2023-08-14',
      email: 'isabella@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-nurse" />,
    },
    {
      id: 15,
      name: 'Mia Wilson',
      product: 'Mouse Ergonômico',
      price: 'R$ 100,00',
      date: '2023-08-15',
      email: 'mia@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-tie" />,
    },
  ];

  return (
    <div className="custom-scroll bg-gradient-to-br from-blue-800 to-blue-950 overflow-y-scroll p-4 h-[300px] mb-10">
      <h2 className="text-2xl font-bold text-white">Vendas recentes</h2>
      <div>
        {recentSales.map((sale, key) => {
          return (
            <div
              key={key}
              className="flex flex-row justify-between items-center border-b border-gray-200 py-4"
            >
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-100 text-blue-950 rounded-full mr-3">
                  {sale.icon}
                </div>
                <div className="w-[200px]">
                  <p className="text-white font-semibold">{sale.name}</p>
                  <p className="text-gray-300 text-sm">{sale.email}</p>
                </div>
              </div>
              <div className="flex flex-col w-[200px]">
                <div className="text-start">
                  <p className="text-gray-200 font-semibold">{sale.product}</p>
                  <p className="text-gray-400 text-sm">{sale.date}</p>
                </div>
              </div>
              <div className="w-[200px] text-end">
                <p className="text-gray-200 font-semibold">{sale.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesComp;
