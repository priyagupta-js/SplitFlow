import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Welcome to SplitFlow</h1>
        <p className="text-gray-700 text-center">
          This is your dashboard. From here, you can create groups, add expenses, and manage settlements.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
