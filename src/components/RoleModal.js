import React, { useState } from "react";
import { addRole, updateRole } from "../api";

const RoleModal = ({ role, onClose, onSave }) => {
  const [roleData, setRoleData] = useState(role || { name: "", permissions: [] });

  const handleSave = async () => {
    if (role) {
      await updateRole(role.id, roleData);
    } else {
      await addRole(roleData);
    }
    onSave();
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{role ? "Edit Role" : "Add Role"}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Role Name"
              value={roleData.name}
              onChange={(e) => setRoleData({ ...roleData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Permissions (comma-separated)"
              value={roleData.permissions.join(", ")}
              onChange={(e) =>
                setRoleData({ ...roleData, permissions: e.target.value.split(",") })
              }
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
