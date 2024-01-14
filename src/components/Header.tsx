import Image from "next/image"

import { MenuItem } from "./MenuItem"
import { Search } from "./Search"

import Logo from "@/assets/logo.svg"
import IconUser from "@/assets/icon-user.svg"

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-10"></div>
            <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image 
                            src={Logo}
                            alt="Logo"
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <MenuItem 
                                    name="Para você" 
                                />
                            </li>
                            <li>
                                <MenuItem 
                                    name="Para empresas" 
                                />
                            </li>
                            <li>
                                <MenuItem 
                                    name="Serviços" 
                                />
                            </li>
                            <li>
                                <MenuItem 
                                    name="Ajuda" 
                                />
                            </li>
                        </ul>
                    </div>
                  <Search />
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-20">
                    <Image 
                        src={IconUser}
                        alt="Icon User"
                    />
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </div>
        </header>
    )
}