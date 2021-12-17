import React, { FC, KeyboardEvent, MouseEvent, useState } from "react"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

interface NavObject {
  name: string
  uri: string
}

let navObj: NavObject[] = [
  {
    name: "About",
    uri: "#",
  },
  {
    name: "Coffee",
    uri: "#",
  },
  {
    name: "Subscriptions",
    uri: "#",
  },
  {
    name: "Blog",
    uri: "#",
  },
]

const Navbar: FC = () => {
  const size = useBreakpoint()
  const [state, setState] = useState({ left: false })
  const anchor: string = "left"
  const toggleDrawer =
    (anchor: string, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: string) => (
    <div
      className="w-64"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navObj.map((v: NavObject, index: number) => (
          <>
            <ListItem button key={index}>
              <Link to={v.uri} className="text-black no-underline">
                <ListItemText primary={v.name} />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  )

  return (
    <div className="flex items-center px-8 py-4 bg-hero">
      {size.sm ? (
        <>
          <div className="cursor-pointer" onClick={toggleDrawer("left", true)}>
            <img src="/images/hamburger.png" alt="" />
          </div>
          <SwipeableDrawer
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </>
      ) : null}
      <div className="flex-grow text-center">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-24 isSm:w-16" />
        </Link>
      </div>
      <div className="flex items-center gap-x-6">
        {size.sm ? null : (
          <>
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
          </>
        )}
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
