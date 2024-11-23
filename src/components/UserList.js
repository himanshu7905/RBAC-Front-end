import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });
  const [editingUserId, setEditingUserId] = useState(null); // Tracks the user being edited
  const [editedUser, setEditedUser] = useState({ name: "", role: "" }); // Tracks the edited values

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data } = await fetchUsers();
    setUsers(data);
  };

  const handleAddUser = async () => {
    await addUser(newUser);
    loadUsers();
    setNewUser({ name: "", role: "", status: "Active" });
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const handleToggleStatus = async (id, currentStatus, currentName, currentRole) => {
    const updatedStatus = currentStatus === "Active" ? "Inactive" : "Active";
    await updateUser(id, { name: currentName, role: currentRole, status: updatedStatus });
    loadUsers();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id); // Set the user to edit mode
    setEditedUser({ name: user.name, role: user.role }); // Initialize the edited values
  };

  const handleSaveEdit = async (id) => {
    await updateUser(id, { ...editedUser, status: users.find((user) => user.id === id).status });
    setEditingUserId(null); // Exit edit mode
    loadUsers();
  };

  const handleCancelEdit = () => {
    setEditingUserId(null); // Exit edit mode without saving
    setEditedUser({ name: "", role: "" });
  };

  return (
    <div>
      <h3>User Management</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedUser.role}
                    onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
                  />
                ) : (
                  user.role
                )}
              </td>
              <td>{user.status}</td>
              <td>
                {editingUserId === user.id ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleSaveEdit(user.id)}
                    >
                      Save
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        handleToggleStatus(user.id, user.status, user.name, user.role)
                      }
                    >
                      Toggle Status
                    </button>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddUser}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserList;
