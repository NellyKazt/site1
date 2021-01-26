import React from 'react'
import logo from '../img/tonda-logol.png';
import './Style.css'

function Home() {
    return (
        <div>
        <div className='home'>
            <p>
                <img src={logo} className='pic-logo' alt = "Logo Tonda "/>  
                <p>
                   У нас Вы сможете попробовать вкусную, приготовленную с любовью специально для Вас пиццу. 
                </p> 
            </p>
        </div>
        </div>
    )
}

export default Home
