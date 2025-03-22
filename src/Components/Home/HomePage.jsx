import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import logoTittle from '../../assets/images/logo-s.png'
import Loader from 'react-loaders'
import './HomePage.scss'
import Logo from './MainLogo/HeroLogo'
import Letters from '../AnimatedLatter/Letters' 

const HomePage = () => {
  const [lettersClass, setLettersClass] = useState('text-animate') 

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLettersClass('text-animate-hover')
    }, 4000)
  
    return () => {
      clearTimeout(timeoutId) 
    }
  }, [])
  
  return (
    <div className="container home-page">
      <div className="text-zone"> 
        <h1>
          <span className={lettersClass}>H</span>
          <span className={`${lettersClass} _12`}>i,</span>
          <br />
          <span className={`${lettersClass} _13`}>I</span>
          <span className={`${lettersClass} _14`}>'m</span>
          <img src={logoTittle} alt="Logo representing Lobodan" /> 
          <Letters letterClass={lettersClass} strArray={nameArray} idx={15} />
          <br />
          <Letters letterClass={lettersClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>Frontend Developer / JavaScript Expert / React Developer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
      <Loader type="pacman" />
    </div>
  )
}

export default HomePage
