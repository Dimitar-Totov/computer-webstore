import { NavLink } from "react-router"

import style from './home.module.css'

export default function Home() {
    document.title = 'Home Page';

    return (
        <>
            <main className={style["main-content"]}>
                <section className={style["feedback"]}>
                    <NavLink to={"/feedback"}>Feedback</NavLink>
                    <NavLink to={"/helpcenter"}>Help Center</NavLink>
                </section>
                <div className={style["product-container"]}>
                    <section className={style["products-section"]}>
                        <div className={style["menu"]}>
                            <NavLink to={"/components-and-storage"}>Components & Storage</NavLink>
                            <NavLink to={"/computer-systems"}>Computer Systems</NavLink>
                            <NavLink to={"/server-and-components"}>Server & Components</NavLink>
                            <NavLink to={"/electronics"}>Electronics</NavLink>
                            <NavLink to={"/gaming-and-vr"}>Gaming & VR</NavLink>
                            <NavLink to={"/networking"}>Networking</NavLink>
                            <NavLink to={"/smart-home-and-security"}>Smart home & Security</NavLink>
                            <NavLink to={"/office-solutions"}>Office Solutions</NavLink>
                            <NavLink to={"/software-and-services"}>Software & Services</NavLink>
                            <NavLink to={"/drones"}>Drones</NavLink>
                        </div>
                        <div className={style["offers"]}>
                            <NavLink to={"/product"}><img src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png" alt="" /></NavLink>
                            <NavLink to={"/product"}><img src="https://www.games2egypt.com/Images/Products/106624?fileFormat=1" alt="" /></NavLink>
                            <NavLink to={"/product"}><img src="https://desktop.bg/system/images/404811/normal/msi_geforce_rtx_4060_ti_ventus_3x_8g_oc.png" alt="" /></NavLink>
                        </div>
                    </section>
                    <section className={style["today-best-deals"]}>
                        <p>Today's Best Deals</p>
                        <div className={style["cards"]}>
                            <NavLink to={"/product"}>
                                <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/MSI-Cyborg-laptop.png" alt="" />
                                <p>MSI Cyborg - 15.6" GeForce RTX 4050 Laptop GPU - Intel i7-13620H - 16GB Memory - 512 GB SSD - Windows 11 Home - Gaming Laptops - 144 Hz IPS (A13VE-218US )</p>
                            </NavLink>
                            <NavLink to={"/product"}>
                                <img src="https://assets3.razerzone.com/dWiYYPxIjKjjzjTe2x8nNO_y-Ko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fheb%2Fh5a%2F9822063231006%2Fbasilisk-v3-pro-35k-white-500x500.png" alt="" />
                                <p>Razer Basilisk V3 Customizable Ergonomic Gaming Mouse: Fastest Gaming Mouse Switch - Chroma RGB Lighting - 26K DPI Optical Sensor - 11 Programmable Buttons - HyperScroll Tilt Wheel - Classic Black</p>
                            </NavLink>
                            <NavLink to={"/product"}>
                                <img src="https://storage-asset.msi.com/global/picture/image/feature/Gaming-Gear/Combo/gk100-combo/msi-gk100-combo-hotkey-new.png" alt="" />
                                <p>MSI Forge GK100 Combo – Gaming RGB Keyboard 19-Key Anti-Ghosting, 6400 DPI Optical Sensor, 6-Mode RGB, up to 6,400 DPI, Black</p>
                            </NavLink>
                            <NavLink to={"/product"}>
                                <img src="https://shareefcorner.sa/media/catalog/product/cache/d4cc45832d2a6689466075a3e554546c/t/p/tp-link_archer_c80_wireless_-_black-1.png" alt="" />
                                <p>TP-Link Archer AX55 WiFi 6 AX3000 Smart WiFi Router - 802.11ax Wireless Router, Gigabit Internet Router, Dual Band, OFDMA, MU-MIMO, OneMesh Compatible</p>
                            </NavLink>
                        </div>
                    </section>
                </div>
                <div className={style["best-sellers"]}>
                    <p>Best Sellers</p>
                    <div className={style["best-sellers-cards"]}>
                        <NavLink to={"/product"}>
                            <img src="https://desktop.bg/system/images/477938/normal/Aurora_R16.png" alt="" />
                            <p>Alienware Area-51 Gaming Desktop</p>
                        </NavLink>
                        <NavLink to={"/product"}>
                            <img src="https://laptop.bg/system/images/505287/original/acer_nitro_17_an1742_NHQSCEX00A.png" alt="" />
                            <p>Acer Nitro V15 Gaming ANV15-41-R948, 15.6", Full HD, AMD Ryzen 7 7735HS (3.2/4.7GHz, 16M), NVIDIA RTX 4050 6GB GDDR6 DLSS 3, 16 GB, 512 GB SSD - NH.QSGEX.00H</p>
                        </NavLink>
                        <NavLink to={"/product"}>
                            <img src="https://edifier-online.com/cdn/shop/files/2_9c2acecb-7b6b-4a73-a93d-4ffa95a83049.png?v=1709632400&width=3840" alt="" />
                            <p>HyperX Cloud Alpha</p>
                        </NavLink>
                        <NavLink to={"/product"}>
                            <img src="https://cdn.shopify.com/s/files/1/0625/5650/4319/files/leetdesk-aura-gaming-desk_Frame_Black_Tabletop-Dark_Edge-LED_Style-Classic_Size-160x80_diagonal.png?v=1718357108" alt="" />
                            <p>Gaming RGB LED Backlit Desk Set Bright Youth Desk with Volume Control System 155cm, SNAKE 1.4</p>
                        </NavLink>
                        <NavLink to={"/product"}>
                            <img src="https://desktop.bg/system/images/444629/original/asus_dual_geforce_rtx_4060_ti_advanced_edition_16gb.png" alt="" />
                            <p>GeForce RTX 4060 8GB Infinity 2 DLSS 3 - NE64060019P1-1070L</p>
                        </NavLink>
                    </div>
                </div>
            </main>
        </>
    )
}