import { NavLink } from "react-router"
import { useEffect, useState } from "react"

import style from './home.module.css'

const monitors = [
    { monitorImage: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png", monitorName: "Gigabyte Monitor" },
    { monitorImage: "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-long-makeup-game-monitor-gaming-scifi-png-image_11530863.png", monitorName: "ACER Nitro Monitor" },
    { monitorImage: "https://wallpapers.com/images/hd/ultrawide-gaming-monitor-png-4-ohqgzyyok6yt3avf.png", monitorName: "LG Gaming Monitor" },
    { monitorImage: "https://s3.eu-central-1.amazonaws.com/aoc.production.eu/public/media/2021/10/aoc-u28g2xu-hero-visual-2-big.png", monitorName: "AOC Gaming Monitor" },
    { monitorImage: "https://5.imimg.com/data5/SELLER/Default/2021/12/IT/FD/MW/142987610/asus-tuf-gaming-vg28uql1a-gaming-monitor-500x500.png", monitorName: "ASUS Gaming Monitor" },
]

const chairs = [
    { chairImage: "https://www.games2egypt.com/Images/Products/106624?fileFormat=1", chairName: "DXRacer Chair" },
    { chairImage: "https://purepng.com/public/uploads/large/purepng.com-corsair-t1-race-gaming-chairfurnitureobjectschair-821523993628z2l8z.png", chairName: "Razer Gaming Chair" },
    { chairImage: "https://www.galax.com/media/catalog/product/cache/14/image/500x500/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc_3719.png", chairName: "Gala Hero Chair" },
    { chairImage: "https://www.backforce.gg/assets/img/product/blu/EntwickeltMitPros/016_19-08-2019_GamingChair_Stand-Frame_BLUE.png", chairName: "Backforce Chair" },
]

const gpu = [
    { gpuImage: "https://desktop.bg/system/images/404811/normal/msi_geforce_rtx_4060_ti_ventus_3x_8g_oc.png", gpuName: "GeForce RTX 4060" },
    { gpuImage: "https://dlcdnwebimgs.asus.com/gain/ce7bd9eb-4f48-46bb-b82f-43dd5def085e/w692", gpuName: "GeForce RTX 3090" },
    { gpuImage: "https://cdn.hukut.com/GeForce-RTX%C3%A2%C2%84%C2%A2-4070TI-SUPER-EAGLE-OC-16G-Price-in-Nepal-2.png1725442832613", gpuName: "GeForce RTX 4070" },
    { gpuImage: "https://static.gigabyte.com/StaticFile/Image/Global/fec51e21bd64062ee924ec3c72d7ccff/Product/44240/Png", gpuName: "GeForce RTX 5070" },
]

export default function Home() {
    document.title = 'Home Page';
    const [monitorIndex, setMonitorIndex] = useState(0);
    const [chairIndex, setChairIndex] = useState(0);
    const [gpuIndex, setGpuIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextMonitorCard();
        }, 3000);
        return () => clearInterval(interval);
    }, [monitorIndex]);

    const nextMonitorCard = () => {
        setMonitorIndex((prev) => (prev + 1) % monitors.length);
    };

    const prevMonitorCard = () => {
        setMonitorIndex((prev) => (prev - 1 + monitors.length) % monitors.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextChairCard();
        }, 3000);
        return () => clearInterval(interval);
    }, [chairIndex]);

    const nextChairCard = () => {
        setChairIndex((prev) => (prev + 1) % chairs.length);
    };

    const prevChairCard = () => {
        setChairIndex((prev) => (prev - 1 + chairs.length) % chairs.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextGpuCard();
        }, 3000);
        return () => clearInterval(interval);
    }, [gpuIndex]);

    const nextGpuCard = () => {
        setGpuIndex((prev) => (prev + 1) % gpu.length);
    };

    const prevGpuCard = () => {
        setGpuIndex((prev) => (prev - 1 + gpu.length) % gpu.length);
    };

    const { monitorImage, monitorName } = monitors[monitorIndex];
    const { chairName, chairImage } = chairs[chairIndex];
    const { gpuImage, gpuName } = gpu[gpuIndex];

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
                            <ul className={style["components"]}>
                                Components & Storage
                                <div className={style["components-dropdown-menu"]}>
                                    <ul className={style["core-component"]}>
                                        <h3>Core Component</h3>
                                        <NavLink to={"/"}><li>CPU / Processor</li></NavLink>
                                        <NavLink to={"/"}><li>Memory</li></NavLink>
                                        <NavLink to={"/"}><li>GPU & Video Graphics Device</li></NavLink>
                                        <NavLink to={"/"}><li>Power Supply</li></NavLink>
                                        <NavLink to={"/"}><li>Fans & PC Cooling</li></NavLink>
                                        <NavLink to={"/"}><li>Server Components</li></NavLink>
                                    </ul>

                                    <ul className={style["storage-device"]}>
                                        <h3>Storage Device</h3>
                                        <NavLink to={"/"}><li>Hard Drive</li></NavLink>
                                        <NavLink to={"/"}><li>SSD</li></NavLink>
                                        <NavLink to={"/"}><li>Backup Devices & Media</li></NavLink>
                                        <NavLink to={"/"}><li>USB Flash Drive</li></NavLink>
                                        <NavLink to={"/"}><li>Network Attached Storage</li></NavLink>
                                        <NavLink to={"/"}><li>Server Components</li></NavLink>
                                    </ul>

                                    <ul className={style["accessories"]}>
                                        <h3>Accessories</h3>
                                        <NavLink to={"/"}><li>Computer Accessories</li></NavLink>
                                        <NavLink to={"/"}><li>Power Protection</li></NavLink>
                                        <NavLink to={"/"}><li>Cable</li></NavLink>
                                        <NavLink to={"/"}><li>Adapter & Gender Changer</li></NavLink>
                                        <NavLink to={"/"}><li>KVM Switch</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["systems"]}>
                                Computer Systems
                                <div className={style["systems-dropdown-menu"]}>
                                    <ul className={style["desktop"]}>
                                        <h3>Desktop</h3>
                                        <NavLink to={"/"}><li>Desktop Computer</li></NavLink>
                                        <NavLink to={"/"}><li>Gaming Desktop PC</li></NavLink>
                                        <NavLink to={"/"}><li>All-in-One Computer</li></NavLink>
                                        <NavLink to={"/"}><li>Business Desktop</li></NavLink>
                                    </ul>

                                    <ul className={style["laptop-notebook"]}>
                                        <h3>Laptop / Notebook</h3>
                                        <NavLink to={"/"}><li>2-in-1 Laptop</li></NavLink>
                                        <NavLink to={"/"}><li>Business Laptop</li></NavLink>
                                        <NavLink to={"/"}><li>Microsoft Surface</li></NavLink>
                                        <NavLink to={"/"}><li>Touchscreen System</li></NavLink>
                                    </ul>

                                    <ul className={style["gaming-laptops"]}>
                                        <h3>Gaming Laptops</h3>
                                        <NavLink to={"/"}><li>GeForce RTX 50 Series</li></NavLink>
                                        <NavLink to={"/"}><li>GeForce RTX 40 Series</li></NavLink>
                                        <NavLink to={"/"}><li>AMD Gaming Laptop</li></NavLink>
                                        <NavLink to={"/"}><li>Intel Gaming Laptop</li></NavLink>
                                    </ul>

                                    <ul className={style["tablets"]}>
                                        <h3>Tablets</h3>
                                        <NavLink to={"/"}><li>Samsung Galaxy Tab</li></NavLink>
                                        <NavLink to={"/"}><li>Lenovo Tab</li></NavLink>
                                        <NavLink to={"/"}><li>Acer Iconia</li></NavLink>
                                        <NavLink to={"/"}><li>iPad Accessories</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["server-and-components"]}>
                                Server & Components
                                <div className={style["server-and-components-dropdown-menu"]}>
                                    <ul className={style["servers-and-workstaitons"]}>
                                        <h3>Server & Workstations</h3>
                                        <NavLink to={"/"}><li>IPC / Industrial Systems</li></NavLink>
                                        <NavLink to={"/"}><li>Server Barebones</li></NavLink>
                                        <NavLink to={"/"}><li>Server Software</li></NavLink>
                                        <NavLink to={"/"}><li>Enterprice Storage</li></NavLink>
                                        <NavLink to={"/"}><li>Server & Workstation Systems</li></NavLink>
                                    </ul>

                                    <ul className={style["server-components"]}>
                                        <h3>Server Components</h3>
                                        <NavLink to={"/"}><li>Server Motherboards</li></NavLink>
                                        <NavLink to={"/"}><li>Processors - Servers</li></NavLink>
                                        <NavLink to={"/"}><li>Server Memory</li></NavLink>
                                        <NavLink to={"/"}><li>Server Chassis</li></NavLink>
                                    </ul>

                                    <ul className={style["power-protection"]}>
                                        <h3>Power Protection</h3>
                                        <NavLink to={"/"}><li>Battery Backup</li></NavLink>
                                        <NavLink to={"/"}><li>Power Inverters</li></NavLink>
                                        <NavLink to={"/"}><li>Power Strips</li></NavLink>
                                        <NavLink to={"/"}><li>Surge Protectors</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["electronics"]}>
                                Electronics
                                <div className={style["electronics-dropdown-menu"]}>
                                    <ul className={style["cell-phones"]}>
                                        <h3>Cell Phones</h3>
                                        <NavLink to={"#"}><li>Cell Phone Accessories</li></NavLink>
                                        <NavLink to={"#"}><li>Charges & Cables</li></NavLink>
                                        <NavLink to={"#"}><li>Power Banks</li></NavLink>
                                    </ul>
                                    <ul className={style["tv"]}>
                                        <h3>TV</h3>
                                        <NavLink to={"#"}><li>TV & Video</li></NavLink>
                                        <NavLink to={"#"}><li>Home Video Accessories</li></NavLink>
                                        <NavLink to={"#"}><li>Audio / Video Cables</li></NavLink>
                                        <NavLink to={"#"}><li>TV Mounts & Install Accessories</li></NavLink>
                                    </ul>
                                    <ul className={style["portable-electronics"]}>
                                        <h3>Portable Electronics</h3>
                                        <NavLink to={"#"}><li>Headphones</li></NavLink>
                                        <NavLink to={"#"}><li>Portable Speakers</li></NavLink>
                                        <NavLink to={"#"}><li>Digital Cameras</li></NavLink>
                                        <NavLink to={"#"}><li>Bluetooth Headset & Accessories</li></NavLink>
                                    </ul>
                                    <ul className={style["tablets"]}>
                                        <h3>Tablets</h3>
                                        <NavLink to={"#"}><li>Tables</li></NavLink>
                                        <NavLink to={"#"}><li>Android Tablets</li></NavLink>
                                        <NavLink to={"#"}><li>Window Tablets</li></NavLink>
                                        <NavLink to={"#"}><li>iPads</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["gaming-vr"]}>
                                Gaming & VR
                                <div className={style["gaming-vr-dropdown-menu"]}>
                                    <ul className={style["xbox"]}>
                                        <h3>Xbox</h3>
                                        <NavLink to={""}><li>Xbox Series X & S Console</li></NavLink>
                                        <NavLink to={""}><li>Xbox Series X & S Games</li></NavLink>
                                        <NavLink to={""}><li>Xbox Series X & S Accessories</li></NavLink>
                                        <NavLink to={""}><li>VR Headsets</li></NavLink>
                                        <NavLink to={""}><li>VR Accessories</li></NavLink>
                                        <NavLink to={""}><li>VR Gaming</li></NavLink>
                                    </ul>
                                    <ul className={style["playstation"]}>
                                        <h3>Playstation</h3>
                                        <NavLink to={""}><li>PS5 Console</li></NavLink>
                                        <NavLink to={""}><li>PS5 Video Games</li></NavLink>
                                        <NavLink to={""}><li>PS5 Accessories</li></NavLink>
                                    </ul>
                                    <ul className={style["nintendo"]}>
                                        <h3>Nintendo</h3>
                                        <NavLink to={""}><li>Switch Console</li></NavLink>
                                        <NavLink to={""}><li>Switch Video Games</li></NavLink>
                                        <NavLink to={""}><li>Switch Accessories</li></NavLink>
                                    </ul>
                                    <ul className={style["handheld-gaming"]}>
                                        <h3>Handheld Gaming</h3>
                                        <NavLink to={""}><li>Handheld Gaming Console</li></NavLink>
                                        <NavLink to={""}><li>Handheld Gaming Accessories</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["networking"]}>
                                Networking
                                <div className={style["network-dropdown-menu"]}>
                                    <ul className="home-networking">
                                        <h3>Home Networking</h3>
                                        <NavLink to={"#"}><li>Whole Home /Mesh Wifi</li></NavLink>
                                        <NavLink to={"#"}><li>Modems</li></NavLink>
                                        <NavLink to={"#"}><li>Routers</li></NavLink>
                                        <NavLink to={"#"}><li>Range Extenders</li></NavLink>
                                        <NavLink to={"#"}><li>Wifi & Bluetooth Adapters</li></NavLink>
                                    </ul>
                                    <ul className="commercial-networking">
                                        <h3>Commercial Networking</h3>
                                        <NavLink to={"#"}><li>Switches</li></NavLink>
                                        <NavLink to={"#"}><li>Network Interface Cards</li></NavLink>
                                        <NavLink to={"#"}><li>Hardware Licenses</li></NavLink>
                                        <NavLink to={"#"}><li>Firewall & Network Security Devices</li></NavLink>
                                    </ul>
                                    <ul className="accessories">
                                        <h3>Accessories</h3>
                                        <NavLink to={"#"}><li>Network Ethernet Cabels</li></NavLink>
                                        <NavLink to={"#"}><li>Network Antennas</li></NavLink>
                                        <NavLink to={"#"}><li>Device Server</li></NavLink>
                                        <NavLink to={"#"}><li>Power Protection</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["smart-home-and-security"]}>
                                Smart home & Security
                                <div className={style["smart-home-and-security-dropdown-menu"]}>
                                    <ul className={style["smart-home"]}>
                                        <h3>Smart Home</h3>
                                        <NavLink to={"#"}><li>Smart Door Locks & Access</li></NavLink>
                                        <NavLink to={"#"}><li>Smart Hubs & Kits</li></NavLink>
                                        <NavLink to={"#"}><li>Smart Sensors & Alarms</li></NavLink>
                                    </ul>
                                    <ul className={style["security-cameras"]}>
                                        <h3>Security Cameras</h3>
                                        <NavLink to={"#"}><li>IP / Network Cameras</li></NavLink>
                                        <NavLink to={"#"}><li>Outdoor Security Cameras</li></NavLink>
                                        <NavLink to={"#"}><li>Video Recorders</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["office-solutions"]}>
                                Office Solutions
                                <div className={style["office-solutions-dropdown-menu"]}>
                                    <ul className={style["display-printing"]}>
                                        <h3>Display & Printing</h3>
                                        <NavLink to={"#"}><li>Printers / Scanners & Supplies</li></NavLink>
                                        <NavLink to={"#"}><li>Monitor</li></NavLink>
                                        <NavLink to={"#"}><li>Projectors</li></NavLink>
                                    </ul>
                                    <ul className={style["office-technology"]}>
                                        <h3>Office Technology</h3>
                                        <NavLink to={"#"}><li>Office Machines</li></NavLink>
                                        <NavLink to={"#"}><li>Label Makers</li></NavLink>
                                        <NavLink to={"#"}><li>Scanners</li></NavLink>
                                        <NavLink to={"#"}><li>Calculators</li></NavLink>
                                        <NavLink to={"#"}><li>Fax Machines & Copiers</li></NavLink>
                                    </ul>
                                    <ul className={style["furniture"]}>
                                        <h3>Furniture</h3>
                                        <NavLink to={"#"}><li>Office Furniture</li></NavLink>
                                        <NavLink to={"#"}><li>Bookcases & Hutches</li></NavLink>
                                        <NavLink to={"#"}><li>Chair & Accessories</li></NavLink>
                                        <NavLink to={"#"}><li>Desk Accessories & Organizers</li></NavLink>
                                        <NavLink to={"#"}><li>Desk & Laptop Stands</li></NavLink>
                                        <NavLink to={"#"}><li>Gaming Chairs</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["software-and-services"]}>
                                Software & Services
                                <div className={style["software-and-services-dropdown-menu"]}>
                                    <ul className={style["software"]}>
                                        <h3>Software</h3>
                                        <NavLink to={"#"}><li>Operating Systems</li></NavLink>
                                        <NavLink to={"#"}><li>Office & Accounting</li></NavLink>
                                        <NavLink to={"#"}><li>Antivirus & Internet Security</li></NavLink>
                                        <NavLink to={"#"}><li>Audio & Video</li></NavLink>
                                        <NavLink to={"#"}><li>Photo & Design</li></NavLink>
                                        <NavLink to={"#"}><li>Server Software</li></NavLink>
                                        <NavLink to={"#"}><li>Mac Software</li></NavLink>
                                    </ul>
                                    <ul className={style["downloadable-software"]}>
                                        <h3>Downloadable Software</h3>
                                        <NavLink to={"#"}><li>Operating Systems</li></NavLink>
                                        <NavLink to={"#"}><li>Office & Accounting</li></NavLink>
                                        <NavLink to={"#"}><li>Antivirus & Internet Security</li></NavLink>
                                        <NavLink to={"#"}><li>Photo & Design</li></NavLink>
                                        <NavLink to={"#"}><li>Mac Application</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                            <ul className={style["drones"]}>
                                Drones
                                <div className={style["drones-dropdown-menu"]}>
                                    <ul className={style["drone-accessories"]}>
                                        <h3>Drone Accessories</h3>
                                        <NavLink to={"#"}><li>Drone Batteries & Chargers</li></NavLink>
                                        <NavLink to={"#"}><li>Drone Propellers</li></NavLink>
                                        <NavLink to={"#"}><li>Drone Cases & Bags</li></NavLink>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className={style["offers"]}>
                            <div className={style["monitors"]}>
                                <NavLink to={"/product"}><img src={monitorImage} alt={monitorName} /></NavLink>
                                <p>{monitorName}</p>
                                <div className={style["monitors-arrows"]}>
                                    <button onClick={prevMonitorCard}>⮜</button>
                                    <button onClick={nextMonitorCard}>⮞</button>
                                </div>
                            </div>
                            <div className={style["chairs"]}>
                                <NavLink to={"/product"}><img src={chairImage} alt={chairName} /></NavLink>
                                <p>{chairName}</p>
                                <div className={style["chair-arrows"]}>
                                    <button onClick={prevChairCard}>⮜</button>
                                    <button onClick={nextChairCard}>⮞</button>
                                </div>
                            </div>
                            <div className={style["gpus"]}>
                                <NavLink to={"/product"}><img src={gpuImage} alt={gpuName} /></NavLink>
                                <p>{gpuName}</p>
                                <div className={style["gpu-arrows"]}>
                                    <button onClick={prevGpuCard}>⮜</button>
                                    <button onClick={nextGpuCard}>⮞</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style["today-best-deals"]}>
                        <p>Today's Best Deals</p>
                        <div className={style["cardsWrapper"]}>
                            <div className={style["cards"]}>
                                {[...Array(2)].flatMap(() => (
                                    <>
                                        <NavLink to="/product">
                                            <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/MSI-Cyborg-laptop.png" alt="" />
                                            <p>MSI Cyborg - 15.6" GeForce RTX 4050...</p>
                                        </NavLink>

                                        <NavLink to="/product">
                                            <img src="https://assets3.razerzone.com/dWiYYPxIjKjjzjTe2x8nNO_y-Ko=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fheb%2Fh5a%2F9822063231006%2Fbasilisk-v3-pro-35k-white-500x500.png" alt="" />
                                            <p>Razer Basilisk V3 Customizable...</p>
                                        </NavLink>

                                        <NavLink to="/product">
                                            <img src="https://storage-asset.msi.com/global/picture/image/feature/Gaming-Gear/Combo/gk100-combo/msi-gk100-combo-hotkey-new.png" alt="" />
                                            <p>MSI Forge GK100 Combo...</p>
                                        </NavLink>

                                        <NavLink to="/product">
                                            <img src="https://shareefcorner.sa/media/catalog/product/cache/d4cc45832d2a6689466075a3e554546c/t/p/tp-link_archer_c80_wireless_-_black-1.png" alt="" />
                                            <p>TP-Link Archer AX55 WiFi 6...</p>
                                        </NavLink>
                                    </>
                                ))}
                            </div>
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