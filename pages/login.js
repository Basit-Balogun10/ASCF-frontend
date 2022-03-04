import ReactFacebookLogin from "react-facebook-login";
import ReactGoogleLogin from "react-google-login";
import { facebookLogin, googleLogin } from "../axios";

const Login = () => {
 
  const responseFb = (response) => {
    console.log(response);
    facebookLogin(response.accessToken);
  }
  
  const responseGoogle = (response) => {
    console.log(response);
    googleLogin(response.accessToken);
  }
  
  return (
    <>
    <ReactFacebookLogin
           appId="Your App Id"
           fields="name,email"
           callback={responseFb}
    />
    <ReactGoogleLogin
      clientId="your google client id"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
    </>
  );
}

export default Login;