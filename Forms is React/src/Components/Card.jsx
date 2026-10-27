import React from 'react'
// props recieves as a object
export default function Card(props) {
    let name = props.name;
    let mail = props.mail
  return (
    <div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Rgp1FkE3rKb4ANmz1lBX7qBas4v77tfsI0erMOszm7oAL9tYWs6TnRZ0&s=10" alt="" />
        <p className='name'>Name: {name}</p><br />
        <p className='email'>Email: {mail}</p><br />
        <div className='description'>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, unde eveniet quidem corrupti natus culpa iste repellat magnam praesentium quae excepturi alias labore laboriosam perferendis qui! Suscipit tempore et voluptas.</div>
      </div>
    </div>
  )
}
