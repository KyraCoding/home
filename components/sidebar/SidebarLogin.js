'use client';

import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'

export default function SidebarLogin() {
    const [confirmLogout, setConfirmLogout] = useState(false);
    const { data: session } = useSession()
    return (
        <>
            {session && (
                <div onMouseLeave={() => setConfirmLogout(false)} onMouseEnter={() => setConfirmLogout(true)} onClick={() => signOut()} className={`flex items-center bg-azure hover:bg-rose-500 transition duration-500 cursor-pointer w-full sticky bottom-0 p-2 rounded-lg text-center h-12`}>
                    <img src={session.user?.image} className="aspect-square rounded-full h-full mr-4" />
                    <p>{confirmLogout ? `Sign Out` : `Hi ${session.user?.name.split(" ")[0]}!`}</p>
                </div>
            )}
            {!session && (
                <div onClick={() => signIn()} className="flex items-center bg-azure hover:bg-azure-hover transition duration-500 cursor-pointer w-full sticky bottom-0 p-2 rounded-lg text-center h-12">
                    <FontAwesomeIcon fixedWidth size="xl" className=" text-black dark:text-white h-full mr-4" icon={faCircleUser} />
                    <p>Login</p>
                </div>
            )}
        </>
    )
}