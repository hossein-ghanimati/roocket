import { useState } from "react"



export default function Login() {



  const [username, setsername] = useState('')
  const [password, setpasswrod] = useState('')
  const [_, setloading] = useState(false)

  async function Loginf(event) {

    setloading(true)
    const userdata = {
      username: username, // Change 'username' to 'email'
      password: password
    }

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
      , body: JSON.stringify(userdata)
    })
      // fetch('https://homi-node.liara.run/api/users/profile', {
      //     method: 'GET',
      //     headers: {
      //         'Authorization': `Bearer ${localStorage.getItem}`, // Include token in header
      //     }
      // })
      .then(res => {

        console.log(res);

        return res.json()
      }).then(res2 => {
        // if (res2.data.token) {
        //     localStorage.setItem('shoptoken', res2.data.token)
        //     navigation('/')
        // }
        console.log(res2.cookie);
        try {
          // document.cookie =`token=${res2.cookies}; Path:/; httpOnly=true;`
        } catch (err) {
          console.log(err);

        }
        // document.cookie = res2.cookie
        console.log(res2)
        // setloading(false)
      }
      )

  }

  return (<div>

    LOGIN



    <input onChange={(event => setsername(event.target.value))} placeholder={'ایمیل یا نام کاربری خود را وارد کنید'} type="text" />
    <input onChange={(event => setpasswrod(event.target.value))} placeholder={'رمز عبور  خود را وارد کنید'} type="text" />


    <button onClick={() => { Loginf() }}>ورود</button>

  </div>)
}