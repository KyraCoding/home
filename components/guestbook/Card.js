export default function Card({profile, name, message, date}) {
    return (
        <div className='m-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'>
            <div className='flex items-center'>
                <img src={profile} alt='profile' className='w-12 h-12 rounded-full' />
                <div className='ml-4'>
                    <h1 className='text-lg font-bold'>{name}</h1>
                    <p className='text-sm text-gray-500'>{date}</p>
                </div>
            </div>
            <p className='mt-4 text-lg'>{message}</p>
        </div>
    )
}