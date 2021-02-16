import './Login.css';
import Logo from './img/e-bazar.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src={Logo} alt="logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" />
                    
                    <h5>Password</h5>
                    <input type="password" />

                    <button className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing in you agree to all our terms and conditions of E-bazar. Please see our privacy notice to know more.</p>
                
                <button className='login__registerButton'>Create your Account</button>
            </div>
        </div>
     );
}
 
export default Login;