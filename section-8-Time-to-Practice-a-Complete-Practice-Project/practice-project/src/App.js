import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // console.log(uName, uAge);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // <>
    // <React.Fragment>
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* </> */}
      {/* </ React.Fragment> */}
    </Fragment>
  );
};

export default App;
