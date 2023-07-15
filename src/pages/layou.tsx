import React from "react"
import { Outlet } from "react-router-dom"
import {Header} from "./header"
import {Footer} from "./footer"

export const Layout:React.FC = () => {
    return <div>
        <Header />
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/work'>WOrk</a></li>
            <li><a href='/kk'>KK</a></li>
        </ul>
        <Outlet />
        <Footer />
    </div>
}