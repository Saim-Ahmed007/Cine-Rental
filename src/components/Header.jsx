/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.svg'
import ring from '../assets/ring.svg'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import CartDetails from '../cine/CartDetails'
import { MovieContext, ThemeContext } from '../context'


const Header = () => {
	const [showCart, setShowCart] = useState(false)

	const handleCartShow = () => {
		setShowCart(true)
	}
	const handleCartClose = () => {
		setShowCart(false)
	}

	const {cartData} = useContext(MovieContext)
	const {darkMode, setDarkMode} = useContext(ThemeContext)
	

  return (
    <div>
		{showCart && <CartDetails onClose={handleCartClose}/>}
      <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={logo} width="139" height="26" alt="logo" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ring} width="24" height="24" alt="ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={()=> setDarkMode(darkMode => !darkMode)}>
						<img src={darkMode ? sun : moon} width="24" height="24" alt="moon" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handleCartShow}>
					
						<img src={shoppingCart} width="24" height="24" alt="cart" />

					{
						cartData.length > 0 &&(
							<span
							className='rounded-full absolute top-[-12px] left-[20px]  bg-[#12CF6F]
							text-white text-center p-[2px] w-[30px] '>
								{cartData.length}
							</span>
						)					
					}
					</a>
				</li>
			</ul>
		</nav>
	</header>
      
    </div>
  )
}

export default Header
