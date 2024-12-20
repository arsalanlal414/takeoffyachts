import React from 'react';
import DashboardCards from '../components/DashboardCards';
import SalesDetailsChart from '../components/charts/SalesDetailsChart';
import YachtList from '../components/YachtList';
import ActiveUsersTable from '../components/ActiveUsersTable';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section>
        <DashboardCards />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesDetailsChart />
        </div>

        <div>
          <YachtList />
        </div>
      </section>

      <section>
        <ActiveUsersTable limit={8}/>
      </section>
    </div>
  );
};

export default Dashboard;
