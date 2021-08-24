import Link from 'next/link';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className='sticky-navbar h-20 flex items-center opacity-80 border-b border-[#e6e8ec] dark:border-[#353945] z-10 bg-light dark:bg-dark'>
      <div className='container flex items-center'>
        <Link href='/'>
          <a>
            <figure className='flex items-center border-r border-[#e6e8ec] dark:border-[#353945] pr-8'>
              <div className='w-8 h-8 bg-gray-200 dark:bg-gray-700 mr-3'></div>
              <figcaption className='text-gray-700 dark:text-gray-300 text-2xl font-semibold'>
                Lumiere
              </figcaption>
            </figure>
          </a>
        </Link>
        <nav>
          <ul className='flex font-medium text-[#777e90] text-sm'>
            <li className='flex items-end mr-4 ml-8 cursor-pointer'>
              <p>Discover</p>
              <FiChevronDown className='ml-1 w-5 h-5' />
            </li>
            <li className='flex items-end mx-4 cursor-pointer'>
              <p>Media</p>
              <FiChevronDown className='ml-1 w-5 h-5' />
            </li>
          </ul>
        </nav>
        <form className='flex relative items-center ml-auto'>
          <input
            type='text'
            name='search'
            placeholder='Search for anything'
            className='py-3 rounded-lg border-2 bg-transparent pr-16 pl-5 text-sm border-[#e6e8ec] dark:border-[#353945] placeholder-[#777e90]'
          />
          <FiSearch className='absolute right-0 mr-5 text-[#777e90] w-6 h-6' />
        </form>
        <button className='ml-8 font-medium text-sm rounded-3xl px-5 py-3 bg-blue-600 text-dark dark:text-light'>
          Support us
        </button>
      </div>
    </header>
  );
}
