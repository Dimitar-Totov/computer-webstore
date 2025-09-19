import { NavLink } from 'react-router'

import style from './footer.module.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style["content"]}>
                    <div className={style["service"]}>
                        <h3>SERVICE</h3>
                        <NavLink to={"/#"}>Help Center</NavLink>
                        <NavLink to={"/#"}>Return an Item</NavLink>
                        <NavLink to={"/#"}>Privacy & Security</NavLink>
                        <NavLink to={"/#"}>Feedback</NavLink>
                    </div>
                    <div className={style["my-account"]}>
                        <h3>MY ACCOUNT</h3>
                        <NavLink to={"/#"}>Login</NavLink>
                        <NavLink to={"/#"}>Register</NavLink>
                        <NavLink to={"/#"}>Order History</NavLink>
                        <NavLink to={"/#"}>Information</NavLink>
                    </div>
                    <div className={style["company"]}>
                        <h3>COMPANY</h3>
                        <NavLink to={"/#"}>Award/Rankings</NavLink>
                        <NavLink to={"/#"}>Careers</NavLink>
                        <NavLink to={"/#"}>Relations</NavLink>
                        <NavLink to={"/#"}>About Us</NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}