import React from 'react'
import Header from '../Components/Header'
import './Login.css'

const Login = () => {
  return (
    
    <div>
        <Header />
       <div className="login_container">
        <h2>Login</h2>
        <form id='login'>

          <div className="form-group">
            <label for="username">Email</label>
            <input type="text" id=" username" name="username" placeholder="Username" />
          </div>

          <div className="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="password" />
          </div>

          <div className='button'>
            <button type="submit"> Entrar </button>
          </div>


        </form>

      </div>
    </div>
  )
}

export default Login
