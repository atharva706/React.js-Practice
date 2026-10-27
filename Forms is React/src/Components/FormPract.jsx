import React, { useState } from "react";

function FormPract() {
  const [user, setUsers] = useState({
    name: "",
    branch: "",
    age: "",
  });

  const [profile, setProfile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile([...profile, user]);

    setUsers({
      name: "",
      branch: "",
      age: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({ ...user, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="enter name"
          value={user.branch}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="enter name"
          value={user.age}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {profile.map((user, index) => (
        <div key={index}>
          <h3>User {index + 1}</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default FormPract;
