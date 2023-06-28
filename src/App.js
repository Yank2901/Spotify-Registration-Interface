import './App.css';
import React from "react";
import SpotifyHeader from './components/SpotifyHeader';
import FormDivider from './components/FormDivider';
import ButtonRegister from './components/ButtonRegister';
import RegisterForm from './components/RegisterForm';

function App() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    isShowPassword: false,
    userName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    marketingMessages: false,
    shareData: false
  });

  const handleGoogleRegistration = () => {
    alert("Se ha registrado con Google");
  };

  const handleFacebookRegistration = () => {
    alert("Se ha registrado con Facebook");
  };

  return (
    <div className="app-container">
      <SpotifyHeader />
      <ButtonRegister provider="Facebook" onClick={handleFacebookRegistration} />
      <ButtonRegister provider="Google" onClick={handleGoogleRegistration} />
      <FormDivider />
      <div className='contentRegisterForm'>
        <RegisterForm state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
