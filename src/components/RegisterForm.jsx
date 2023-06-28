import React, { useState } from 'react';
import mostrar from '../image/mostrar.png';
import esconder from '../image/esconder.png';

const RegisterForm = (props) => {
  const {state, setState} = props;

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorBirthDay, setErrorBirthDay] = useState("");
  const [errorBirthMonth, setErrorBirthMonth] = useState("");
  const [errorBirthYear, setErrorBirthYear] = useState("");
  const [errorGender, setErrorGender] = useState("");

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
  
    setState((prevState) => ({
      ...prevState,
      email: emailValue,
    }));
  
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailValue === "") {
      setErrorEmail("Es necesario que indiques tu correo electrónico.");
    } else if (!emailRegex.test(emailValue)) {
      setErrorEmail("El correo electrónico ingresado no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com");
    } else {
      setErrorEmail("");
    }
  };
  
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setState((prevState) => ({
      ...prevState,
      password: passwordValue
    }));

    // Validación de longitud mínima
    if (passwordValue.length < 8) {
      setErrorPassword('Tu contraseña es demasiado corta.');
    }
    // Validación de al menos un número y una letra
    else if (!/\d/.test(passwordValue) || !/[a-zA-Z]/.test(passwordValue)) {
      setErrorPassword(
        'Tu contraseña no es segura. Utiliza una más compleja.'
      );
    } else {
      setErrorPassword('');
    }
  };
  
  const handleShowPasswordToggle = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword
    }));
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setState((prevState) => ({
      ...prevState,
      userName: nameValue
    }));
    if (nameValue === '') {
      setErrorUserName('Indica un nombre para tu perfil.');
    } else {
      setErrorUserName('');
    }
  };

  const birthDayChange = (e) => {
    const dayValue = e.target.value;
    setState((prevState) => ({
      ...prevState,
      birthDay: dayValue
    }));

    const day = parseInt(dayValue, 10);
    if (isNaN(day) || day < 1 || day > 31) {
      setErrorBirthDay('Indica un día válido del mes.');
    } else {
      setErrorBirthDay('');
    }
  };

  const birthMonthChange = (e) => {
    const monthValue = e.target.value;
    setState((prevState) => ({
      ...prevState,
      birthMonth: monthValue
    }));

    if (monthValue === '') {
      setErrorBirthMonth('Selecciona tu mes de nacimiento.');
    } else {
      setErrorBirthMonth('');
    }
  };

  const birthYearChange = (e) => {
    const yearValue = e.target.value;
    setState((prevState) => ({
      ...prevState,
      birthYear: yearValue
    }));
  
    const year = parseInt(yearValue);
    const isNonEmpty = yearValue.trim() !== '';
    const hasNoLetters = /^\d+$/.test(yearValue);
    const isGreaterThan1900 = year > 1900;
  
    if (!isNonEmpty || !hasNoLetters || !isGreaterThan1900) {
      setErrorBirthYear('Indica un año válido.');
    } else {
      setErrorBirthYear('');
    }
  };
  
  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setState((prevState) => ({
      ...prevState,
      gender: selectedGender
    }));
  
    if (!selectedGender) {
      setErrorGender('Selecciona tu género.');
    } else {
      setErrorGender('');
    }
  };
  
  const handleMarketingMessagesChange = (e) => {
    const isChecked = e.target.checked;
    setState((prevState) => ({
      ...prevState,
      marketingMessages: isChecked
    }));
  };
  
  const handleShareDataChange = (e) => {
    const isChecked = e.target.checked;
    setState((prevState) => ({
      ...prevState,
      shareData: isChecked
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Se ha registrado su usuario en Spotify');
  };

  return (
    <form onSubmit={handleSubmit} className='FormReg'>
      <div className='campo'>
        <p className='titleSection'>¿Cuál es tu correo electrónico?</p>  
        <input 
          type="text" 
          className='inputText'
          onBlur={handleEmailChange} 
          placeholder='Pon tu correo electrónico.'
          required
        />
        {
          <p className='errorMsg'> {errorEmail}</p>
        }
        <a className="formRef" href="https://n9.cl/m5iu9" target='_blank' rel="noreferrer">Usa un número de teléfono</a>
      </div>

      <div className='campo'>
        <p className='titleSection'>Crea una contraseña</p> 
        <div style={{ position: 'relative' }}>
          <input
            type={state.isShowPassword ? 'text' : 'password'}
            className=' inputPass'
            onBlur={handlePasswordChange}
            placeholder='Crea una contraseña.'
            required
          />
          <button
            type="button"
            onClick={handleShowPasswordToggle}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={state.isShowPassword ? mostrar : esconder}
              alt={state.isShowPassword ? 'Ocultar' : 'Mostrar'}
              style={{ height: '20px' }}
            />
          </button>
        </div>
        {errorPassword && <p className='errorMsg'> {errorPassword}</p>}
      </div>

      <div className='campo'>
        <p className='titleSection'>¿Cómo quieres que te llamemos?</p> 
        <input 
          type="text" 
          className='inputText'
          onBlur={handleNameChange}
          placeholder='Pon un nombre de perfil.'
          required
        />
        {
          <p className='errorMsg'> {errorUserName}</p>
        }
      </div>

      <div className='alignRow'>
        Esto aparece en tu perfil.
      </div>

      <div className='campo'>
        <p className='titleSection'>¿Cuál es tu fecha de nacimiento?</p>  
        <div className='campo2'>
          <div className='dataDay'>
          <p className='titleData'>Día</p>
            <input 
              type="text" 
              className='inputText'
              onBlur={birthDayChange}
              placeholder='DD'
              required
            />
          </div>
          <div className='dataMonth'>
          <p className='titleData'>Mes</p>
            <select value={state.birthMonth} onChange={birthMonthChange} className='inputText' required>
              <option value="" disabled>Mes</option>
              <option value="enero">Enero</option>
              <option value="febrero">Febrero</option>
              <option value="marzo">Marzo</option>
              <option value="abril">Abril</option>
              <option value="mayo">Mayo</option>
              <option value="junio">Junio</option>
              <option value="julio">Julio</option>
              <option value="agosto">Agosto</option>
              <option value="septiembre">Septiembre</option>
              <option value="octubre">Octubre</option>
              <option value="noviembre">Noviembre</option>
              <option value="diciembre">Diciembre</option>
            </select>
          </div>

          
          <div className='dataYear'>
            <p className='titleData'>Año</p>
            <input 
              type="text" 
              className='inputText'
              onBlur={birthYearChange}
              placeholder='AAAA'
              required
            />
          </div>
        </div>
        {
          <p className='errorMsg'> {errorBirthDay}</p>
        }
        {
          <p className='errorMsg'> {errorBirthMonth}</p>
        }
        {
          <p className='errorMsg'> {errorBirthYear}</p>
        }
      </div>

      <div className='campo'>
      <p className='titleSection'>¿Cuál es tu género?</p>
      <div className="gender-options">
        <div className="gender-row">
          <label>
            <input type="radio" name="gender" value="Hombre" checked={false} onChange={handleGenderChange} required/>
            <span className="radio-label">Hombre</span>
          </label>
          <label>
            <input type="radio" name="gender" value="Mujer" onChange={handleGenderChange} />
            <span className="radio-label">Mujer</span>
          </label>
          <label>
            <input type="radio" name="gender" value="No binario" onChange={handleGenderChange} />
            <span className="radio-label">No binario</span>
          </label>
          <label>
            <input type="radio" name="gender" value="Otro" onChange={handleGenderChange} />
            <span className="radio-label">Otro</span>
          </label>
        </div>
      </div>
      <div className="gender-message">
        <label>
          <input type="radio" name="gender" value="Prefiero no responder" onChange={handleGenderChange} />
          <span className="radio-label">Prefiero no responder</span>
        </label>
        {errorGender && <p className='errorMsg'>{errorGender}</p>}
      </div>
    </div>

      <div className='campo2'>
        <div className='advise'>
          <input type="checkbox" onChange={handleMarketingMessagesChange} />
          <p className='advise'>No quiero recibir mensajes de marketing de Spotify</p>
        </div>
      </div>
      
      <div className='campo2'>
        <div className='advise'>
          <input type="checkbox" onChange={handleShareDataChange} />
          <p>Compartir mis datos de registro con los proveedores de contenidos de Spotify para fines de marketing.</p>
        </div>
      </div>
      
      <div className='useCondition'>
        <p>
          Al hacer clic en Registrarte, aceptas los
          <a href="https://www.spotify.com/ec/legal/end-user-agreement/" target='_blank' rel="noreferrer">Términos y condiciones de uso de Spotify</a>.
        </p>
        <br/>
        <p>
          Para obtener más información acerca de cómo Spotify recopila, utiliza, comparte y protege tus datos personales, consulta la <a href="https://www.spotify.com/ec/legal/privacy-policy/" target='_blank' rel="noreferrer">Política de privacidad de Spotify</a>.
        </p>
      </div>
     
      
      <button type="submit" className='submitButton'>Regístrate</button>
      
      <div className='useCondition'>
        <p>
          ¿Ya tienes cuenta?
          <a href="https://n9.cl/ihs5u" target='_blank' rel="noreferrer">Inicia sesión</a>.
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;