import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDates = () => {
  const reports = [
    {
      title: 'Total de Vendas',
      value: 'R$ 21.526.80',
      icon: <FontAwesomeIcon icon="dollar-sign" />,
      color: 'bg-green-600',
    },
    {
      title: 'Total de Clientes',
      value: '312',
      icon: <FontAwesomeIcon icon="users" />,
      color: 'bg-blue-600',
    },
    {
      title: 'Total de Pedidos',
      value: '203',
      icon: <FontAwesomeIcon icon="box" />,
      color: 'bg-yellow-600',
    },
  ];
  return (
    <div className="flex flex-row">
      {reports.map((report, key) => {
        return (
          <div
            key={key}
            className={`flex flex-col rounded-lg text-white mx-4 p-5 gap-3 h-[150px] max-w-[204px] justify-evenly  ${report.color}`}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl border rounded-full w-[50px] h-[50px] text-center flex flex-col justify-center">
                {report.icon}
              </span>
            </div>
            <div className="text-center">
              <p>{report.title}</p>
              <p className="text-center text-2xl font-medium">{report.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardDates;
