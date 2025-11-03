import { NavLink } from "react-router"

import style from './navigation.module.css'

export default function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <div className={style["navbar-content"]}>
                        <div className={style["logo-container"]}>
                            <NavLink to={"/"}><img className={style["logo"]} src="/logo.png" alt="Logo" /></NavLink>
                        </div>
                        <input name="search" type="search" />
                        <div className={style["links-container"]}>
                            <NavLink to={"/catalog"}>Catalog</NavLink>
                            <NavLink to={"/about"}>About Us</NavLink>
                            <NavLink to={"/register"}>Register</NavLink>
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink to={"/your-shoping-card"}><img className={style["shopping-card"]} src="/shoppingCard.png" alt="Shopping card"></img></NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}