import React from 'react';
import { WelcomePageStyle } from './WelcomePage.styled';
import Icon from '../../images/symbol-defs.svg';
import StartIconLaptopx1 from '../../images/Image-wp-laptop@1x.jpg';
import StartIconLaptopx2 from '../../images/Image-wp-laptop@2x.jpg';
import StartIconMobile1 from '../../images/Image-wp-mobile@1x.jpg';
import StartIconMobile2 from '../../images/Image-wp-mobile@2x.jpg';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <WelcomePageStyle style={{}}>
      <picture className="iconUser">
        <source
          media="(min-width: 1440px)"
          srcSet={(`${StartIconLaptopx1} 1x`, `${StartIconLaptopx2} 2x`)}
        />
        <source
          media="(min-width: 768px)"
          srcSet={(`${StartIconLaptopx1} 1x`, `${StartIconLaptopx2} 2x`)}
        />
        <source
          media="(max-width: 767px)"
          srcSet={(`${StartIconMobile1} 1x`, `${StartIconMobile2} 2x`)}
        />
        <img
          src={(`${StartIconLaptopx1} 1x`, `${StartIconLaptopx2} 2x`)}
          alt="icon-user"
        />
      </picture>
      <div className="containerLogoName">
        <div className="containerIcon">
          <svg className="icon">
            <use href={`${Icon}#icon-Vector`}></use>
          </svg>
        </div>
        <p className="logoName">Task Pro</p>
      </div>
      <p className="description">
        Supercharge your productivity and take control of your tasks with
        TaskPro - Don't wait, start achieving your goals now!
      </p>
      <Link to="/registration">
        <button
          onClick={() => console.log('rout registration')}
          className="btn"
        >
          Registration
        </button>
      </Link>
      {/* Link to login */}
      <Link to="/login" className="linkLogin">
        Log In
      </Link>
    </WelcomePageStyle>
  );
}
