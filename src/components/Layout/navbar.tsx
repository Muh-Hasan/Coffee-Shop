import React, { FC } from "react"
import { Link } from "gatsby"

const Navbar: FC = () => {
  return (
    <div className="flex items-center px-8 py-4 bg-hero">
      <div className="flex-grow">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="flex items-center gap-x-6">
        <div>
          <p className="cursor-pointer">About</p>
        </div>
        <div>
          <p className="cursor-pointer">Coffee</p>
        </div>
        <div>
          <p className="cursor-pointer">Subscriptions</p>
        </div>
        <div>
          <p className="cursor-pointer">Blog</p>
        </div>
        <div className="h-5 w-[0.1rem] bg-border" />
        <div className="w-4 cursor-pointer">
          <img
            src="/images/shopping-cart.png"
            alt="shopping-cart"
            className="w-full"
          />
        </div>
        <div className="w-4 cursor-pointer">
          <img src="/images/user.png" alt="user" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
