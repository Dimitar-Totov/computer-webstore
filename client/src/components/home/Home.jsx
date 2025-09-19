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
                                <div>
                                    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/MSI-Cyborg-laptop.png" alt="" />
                                    <p>MSI Cyborg - 15.6" GeForce RTX 4050 Laptop GPU - Intel i7-13620H - 16GB Memory - 512 GB SSD - Windows 11 Home - Gaming Laptops - 144 Hz IPS (A13VE-218US )</p>
                                </div>
                            </NavLink>
                            <NavLink to={"/product"}>
                                <div>
                                    <img src="https://assets3.razerzone.com/dWiYYPxIjKjjzjTe2x8nNO_y-Ko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fheb%2Fh5a%2F9822063231006%2Fbasilisk-v3-pro-35k-white-500x500.png" alt="" />
                                    <p>Razer Basilisk V3 Customizable Ergonomic Gaming Mouse: Fastest Gaming Mouse Switch - Chroma RGB Lighting - 26K DPI Optical Sensor - 11 Programmable Buttons - HyperScroll Tilt Wheel - Classic Black</p>
                                </div>
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
                        <NavLink to={"/product"}> <img src="https://i.pcmag.com/imagery/reviews/00B2H5RkSOPNPhASt8jGqLq-5-hero-image-gallery..v1744242002.jpg" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://www.digitaltrends.com/wp-content/uploads/2024/10/Acer-Nitro-16-gaming-laptop.jpg?fit=720%2C540&p=1" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://i5.walmartimages.com/seo/BENGOO-G9000-Stereo-Gaming-Headset-with-Noise-Cancelling-Mic-LED-Light-Bass-Surround-for-PS4-PC-Xbox-One-PS5-Controller_83e46faa-4996-42b6-92e5-991635578de8.d14c4eccccd6e0132fc52238fd918f08.jpeg" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://www.jbhifi.com.au/cdn/shop/products/511962-Product-0-I-637497686352598307.jpg?v=1614132308" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://xrocker.co.uk/cdn/shop/files/ascend-height-adjustable-desk-black-1_1000x1000_crop_center.jpg?v=1753873729" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://m.media-amazon.com/images/I/81+EtD9L9uS.jpg" alt="" /> </NavLink>
                        <NavLink to={"/product"}> <img src="https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/GTX1080/carousel_TF6.jpg" alt="" /> </NavLink>
                    </div>
                </div>
            </main>
        </>
    )
}