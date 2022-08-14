/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { sidebar } from '../../constant/sidebar';

const Sidebar = () => {
  const user = useUser();
  const router = useRouter();
  return (
    <div className="h-screen max-w-[9rem] sm:max-w-[15rem] md:inline-flex lg:w-[18rem] bg-[#1f2937] text-white">
        <div className="flex flex-col w-full">
            <div className="bg-[#111827] h-[80px] shadow-lg shadow-blue-500/25">
                <Link href="/">
                    <div className="p-2 sm:p-4 flex space-x-2 items-center cursor-pointer">
                        <Image src={user?.user?.picture} alt="logo" height={50} width={50} className="rounded-full" />
                        <p className="font-bold hidden sm:inline-flex truncate">{user?.user?.family_name ? user?.user?.name : user?.user?.nickname}</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col p-2 space-y-3 pt-6">
                {sidebar?.map((link) => (
                    <Link href={link.href} key={link.navItem}>
                        <button className={`flex items-center space-x-2 ${router?.pathname === link.href ? 'activeLink' : 'side-button-container'}`}>
                            <div className="h-5 w-5">
                                {link.icon}
                            </div>
                            <p className="hidden sm:inline-flex">{link.navItem}</p>
                        </button>
                    </Link>
                ))}
            </div>   
        </div>
    </div>
  )
}

export default Sidebar