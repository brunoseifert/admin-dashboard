import CardComp from './CardComp';
import CardDates from './CardDates';
import CollumChart from './ColummChart.jsx';
import MetricsComp from './MetricsComp';
import { periodData } from '../../src/data.js';
import SalesComp from './SalesComp.jsx';

const Dashboard = ({ open }) => {
  return (
    <>
      <div
        className={`mt-[30px] ease-in-out duration-500 ${
          open
            ? 'sm: ml-[160px]  md:ml-[160px] lg:ml-[160px] xl:ml-[100px] 2xl:ml-0'
            : ''
        }`}
      >
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col gap-4">
            <CardComp />
            <MetricsComp />
          </div>
          <div className="flex flex-col justify-between gap-3 h-full">
            <CardDates />
            <CollumChart
              periodData={periodData}
              dataColors={['#1abc9c', '#3498db', '#f1c40f', '#e74c3c']}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-auto">
          <SalesComp />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
