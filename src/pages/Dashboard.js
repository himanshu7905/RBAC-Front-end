import React from "react";
import UserList from "../components/UserList";
import RoleList from "../components/RoleList";

const Dashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <UserList />
        </div>
        <div className="col-md-6">
          <RoleList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
