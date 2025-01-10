import { useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

function Users() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <UserForm selectedUser={selectedUser} onUserSaved={() => setSelectedUser(null)} />
      <UserList onEdit={setSelectedUser} />
    </>
  );
}

export default Users;
