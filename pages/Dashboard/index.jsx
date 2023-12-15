import Sidebar from '../../src/components/Common/Sidebar';
import CardComp from './CardComp';
import CardDates from './CardDates';
import CollumChart from './ColummChart.jsx';
import MetricsComp from './MetricsComp';
import { periodData } from '../../src/data.js';

const Dashboard = () => {
  return (
    <>
      <div className="pt-20">
        <div className="fixed border-r border-blue-300 h-full w-[200px]">
          <Sidebar />
        </div>

        <div className="flex flex-row justify-center gap-4 ml-[200px]">
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
      </div>
    </>
  );
};

export default Dashboard;
