'use client'

import { usePathname, useRouter } from 'next/navigation';
import Nprogress from 'nprogress';
import { useEffect } from 'react';

export default function Loader({ href, children }) {
    const router = useRouter();
    const pathname = usePathname();

    Nprogress.configure({ easing: 'ease-out', speed: 200, showSpinner: false });

    useEffect(() => {
        Nprogress.done();
    }, [pathname]);

    const handleRouter = (route) => {
        if (route !== pathname) {
            Nprogress.start();
        }
        router.push(route);
    };

    return (
        <div onClick={() => handleRouter(href)} className="cursor-pointer">{children}</div>
    )
}