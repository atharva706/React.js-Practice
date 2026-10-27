import React, { useState } from "react";
import Profile from "./Profile";

export default function ProfileCard() {

  const [skill , setSkill] = useState(['React' , 'Node'])

  const addSkill = () =>{
      setSkill((prev) => [...prev, 'mongoose' , 'mongodb'])
  }

  const [person, setChange] = useState({
    name: "Rahul",
    age: 20,
    city: "Pune",
    address:{
      pincode : 431603
    }
  });

  const handleClick = () => {
    setChange({...person ,city:'Mumbai' , address:{...person.address , pincode:4316089}});
    console.log(person.city);
  };

  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.city}</p>
      <p>{person.address.pincode}</p>
      <p>{skill}</p>



      <button onClick={handleClick}>Change city</button>

      <button onClick={addSkill}>Add skills</button>
    </div>
  );
}
