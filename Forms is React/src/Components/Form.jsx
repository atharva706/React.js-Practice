import React, { useState } from "react";

function Form() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, profile]);

    setProfile({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={profile.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={profile.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={profile.age}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add User</button>
      </form>

      <hr />

      <h2>All Users</h2>

      {users.map((user, index) => (
        <div key={index}>
          <h3>User {index + 1}</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Form;
