import React from "react";

// export default function Profile(props) {
//   let login = props.isLogin;

//   if (login) {
//     return (
//       <>
//         <p>WELCOME</p>
//       </>
//     )
//   } else {
//     return (
//       <>
//         <p>plz login</p>
//       </>
//     );
//   }
// }


export default function Profile(props) {
  let login = props.isLogin;

  return (
    <>
    {login ? <p>Welcome folks</p> : <p>jaa be</p>}
    </>
  )
  
}