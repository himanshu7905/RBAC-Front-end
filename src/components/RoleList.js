import React, { useState, useEffect } from "react";
import { fetchRoles, deleteRole } from "../api";
import RoleModal from "./RoleModal";

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    const { data } = await fetchRoles();
    setRoles(data);
  };

  const handleDeleteRole = async (id) => {
    await deleteRole(id);
    loadRoles();
  };

  return (
    <div>
      <h3>Role Management</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteRole(role.id)}>
                  Delete
                </button>
                <button
                  className="btn btn-secondary btn-sm ms-2"
                  onClick={() => setSelectedRole(role)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRole && <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} onSave={loadRoles} />}
    </div>
  );
};

export default RoleList;
