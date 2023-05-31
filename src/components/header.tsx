import Link from 'next/link';

import Icon from './icon';
import Logo from './logo';

interface Menu {
  name: string;
  link: string;
}

function Header() {
  const menus: Menu[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Surfing',
      link: '/highlight/surfing',
    },
    {
      name: 'Hula',
      link: '/highlight/hula',
    },
    {
      name: 'Vulcano',
      link: '/highlight/vulcano',
    },
  ];
  return (
    <div className="fixed inset-x-0 z-10 mx-auto bg-white px-[24px] py-[21px] shadow-lg shadow-green/10 sm:mt-0 sm:w-screen sm:rounded-none md:mt-[24px] md:w-[80vw] md:rounded-lg">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="ml-[80px] hidden flex-1 items-center justify-start md:flex">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="mr-[40px] capitalize hover:underline"
            >
              <Link href={menu.link}>{menu.name}</Link>
            </div>
          ))}
        </div>
        <div className="hidden items-center justify-between md:flex">
          <button className="primary-button">Book a trip</button>
        </div>
        <div className="sm:visible md:hidden">
          <button>
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
