import CardComp from './CardComp';
import CardDates from './CardDates';
import CollumChart from './ColummChart.jsx';
import MetricsComp from './MetricsComp';
import { periodData } from '../../src/data.js';

const Dashboard = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Dashboard;
