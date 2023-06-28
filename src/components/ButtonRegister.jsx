import React from 'react';
import logoFacebook from '../image/Facebook.png'
import logoGoogle from '../image/Google.png'

const ButtonRegister = ({ provider, onClick }) => {
  let buttonProps = {
    providerName: '',
    backgroundColor: '',
    fontColor: '',
    scrImage: '',
    hyperlink: '',
    borderSize: ''
  };

  if (provider === 'Google') {
    buttonProps.providerName = 'Registrarte con Google';
    buttonProps.backgroundColor = '#fff';
    buttonProps.scrImage = logoGoogle
    buttonProps.hyperlink = 'https://n9.cl/amowjl';
    buttonProps.fontColor = '#000';
    buttonProps.border = '1px solid';

  } else if (provider === 'Facebook') {
    buttonProps.providerName = 'Registrarte con Facebook';
    buttonProps.backgroundColor = '#405a93';
    buttonProps.scrImage = logoFacebook
    buttonProps.hyperlink = 'https://www.facebook.com';
    buttonProps.fontColor = '#fff';
    buttonProps.border= 'none';
  }
  
  const buttonStyle = {
    backgroundColor: buttonProps.backgroundColor,
    border: buttonProps.border
  };

  return (
    <div className="buttonSing">
        <button style={buttonStyle} onClick={onClick}>
            <a style={{ color: buttonProps.fontColor }} href={buttonProps.hyperlink} target="_blank">
                <span>
                    <div className="LogoButton">
                        <img width="24" height="24" src={buttonProps.scrImage} alt={provider} />
                    </div>
                    {buttonProps.providerName}
                </span>
            </a>
        </button>
    </div>
  );
};

export default ButtonRegister;
