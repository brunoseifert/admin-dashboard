import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComp = ({ open }) => {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const year = new Date().getFullYear();

  const minhasVendas = [
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
      date: '2023-04-03',
      email: 'bob@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-secret" />,
    },
    {
      id: 4,
      name: 'Alice Johnson',
      product: 'Mouse sem Fio',
      price: 'R$ 110,00',
      date: '2023-06-04',
      email: 'alice@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-ninja" />,
    },
    {
      id: 5,
      name: 'Charlie Brown',
      product: 'Headset Gamer 7.1',
      price: 'R$ 250,00',
      date: '2023-11-05',
      email: 'charlie@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />,
    },
    {
      id: 6,
      name: 'Eva Williams',
      product: 'Teclado Mecânico TKL',
      price: 'R$ 300,00',
      date: '2023-04-06',
      email: 'eva@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-nurse" />,
    },
    {
      id: 7,
      name: 'David Lee',
      product: 'Monitor LED 27"',
      price: 'R$ 1.000,00',
      date: '2023-11-07',
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
      date: '2023-12-09',
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
      date: '2023-03-02',
      email: 'liam@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-secret" />,
    },
    {
      id: 12,
      name: 'Ava Brown',
      product: 'Monitor Ultrawide 34"',
      price: 'R$ 2.000,00',
      date: '2023-12-12',
      email: 'ava@example.com',
      icon: <FontAwesomeIcon icon="fa-solid fa-user-ninja" />,
    },
    {
      id: 13,
      name: 'Noah White',
      product: 'Headset Noise Cancelling',
      price: 'R$ 500,00',
      date: '2023-05-13',
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

  const getVendasDoMes = (monthValue) => {
    const vendasDoMes = minhasVendas.filter((venda) => {
      const dataVenda = new Date(venda.date);
      return (
        dataVenda.getFullYear() === year && dataVenda.getMonth() === monthValue
      );
    });
    return vendasDoMes;
  };

  const [vendasNoDia, setVendasNoDia] = useState([]);

  const handleDateChange = (date) => {
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const vendasDoDia = minhasVendas.filter(
      (venda) => venda.date === formattedDate
    );
    setVendasNoDia(vendasDoDia);
  };

  return (
    <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/4 xl:w-4/5 2xl:w-4/6 mx-auto">
      <div
        className={`flex flex-wrap justify-center gap-4 transition-all ease-in-out duration-500 ${
          open
            ? 'sm:ml-[160px] md:ml-[160px] lg:ml-[100px] xl:ml-[100px] 2xl:ml-0'
            : ''
        }`}
      >
        {meses.map((mes, index) => {
          const monthValue = new Date(year, index, 1);
          const vendasDoMes = getVendasDoMes(index);

          return (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2 text-white">{mes}</h2>
              <Calendar
                className="rounded-lg p-2 font-normal text-xs w-[250px] h-[270px]"
                calendarType="US"
                view="month"
                value={monthValue}
                tileContent={({ date }) => {
                  const dataFormatada = `${date.getFullYear()}-${String(
                    date.getMonth() + 1
                  ).padStart(2, '0')}-${String(date.getDate()).padStart(
                    2,
                    '0'
                  )}`;
                  const temVenda = vendasDoMes.some(
                    (venda) => venda.date === dataFormatada
                  );
                  return temVenda ? (
                    <div className="bg-green-500 rounded-full h-2 w-2 mx-auto"></div>
                  ) : null;
                }}
                onClickDay={(value) => {
                  handleDateChange(value);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="p-8 mt-10 flex flex-row justify-center">
        <ul className="flex flex-wrap justify-center gap-4">
          {vendasNoDia.map((venda) => (
            <li
              key={venda.id}
              className="w-[18rem] flex flex-col mb-4 text-white gap-8 bg-gradient-to-br from-blue-950 to-slate-600 rounded-md p-4"
            >
              <div className="flex flex-col gap-2 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-2xl border rounded-full w-[50px] h-[50px] text-center flex flex-col justify-center">
                    {venda.icon}
                  </span>
                  <p className="text-xs">{venda.name}</p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <p>{venda.product}</p>
                <p>{venda.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComp;
