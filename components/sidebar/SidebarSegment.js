'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import Loader from '@/components/general/Loader';

function SidebarSegment({ title, link, icon }) {
    return (
        <Loader href={link}>
            <Link href={link} className="w-full h-full px-4 py-2 flex hover:bg-gray-400 dark:hover:bg-gray-600 rounded-md transition duration-300">
                <div className="flex space-x-2 items-center">
                    {icon && <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={icon} />}
                    <p className="text-black dark:text-white text-center text-base">{title}</p>
                </div>
            </Link>
        </Loader>
    );
}

export default SidebarSegment;
