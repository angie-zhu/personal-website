
import {useState} from 'react';
import  "./nav-bar.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navbar() {
    //adds states
    const [isActive, setIsActive] = useState(false);

    //add active class 
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    }

    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <div className="">
            <header className = "App-header">
                <nav className={'navbar'} >
                {/*help*/}
                    <a href ='#home' className = {'logo'}>Angie. </a>

                    <ul className={`navMenu`}>
                        <li onClick={removeActive}>
                            <Link className="link" to="/" style={{ textDecoration: "none" }}>
                            home
                            </Link>
                            {/* /* <a href='#home'> Home</a> */}
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' /*className={`${styles.navLink}`}*/>About Me</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' /*className={`${styles.navLink}`}*/>Experience</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' /*className={`${styles.navLink}`}*/>Academics</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' /*className={`${styles.navLink}`}*/>Extra</a>
                        </li>
                        
                        {/* <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                            <span className={`${styles.bar}`}></span>
                        </div> */}
                        
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

;