import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo-circle.png'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function AppBar() {
  return (
    <nav className="AppBar" role={'navigation'}>
      <div className="logo-box">
        <div className="logo-img">
          <Image className='img' src={logo}></Image>
        </div>
        <h1 className='app-name'>schoolmate</h1>
      </div>
        <ul className="links-box">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/learn'}>Learn</Link>
          </li>
          <li>
            <Link href={'/about'}>About us</Link>
          </li>
        </ul>
      <button className="btn btn__primary">Sign in</button>
      <div className="bars-box">
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}
