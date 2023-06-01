import Link from 'next/link';

import Icon from './icon';
import Logo from './logo';
import { getHighlights } from '@/controllers/highlights';
import { Highlight } from '@/controllers/types';
import Drawer from './drawer';
export interface Menu {
  name: string;
  link: string;
}

async function Header() {
  let menus: Menu[] = [];

  const highlightsData = getHighlights();
  const [highlights] = await Promise.all([highlightsData]);

  menus = highlights.map((highlight: Highlight) => {
    const { title } = highlight;
    return {
      name: title,
      link: `/activities/${title}`,
    };
  });

  const menuItems = menus.map((menu) => (
    <div key={menu.name} className="mr-[40px] capitalize hover:underline">
      <Link href={menu.link}>{menu.name}</Link>
    </div>
  ));

  return (
    <div className="fixed inset-x-0 z-10 mx-auto bg-white px-[24px] py-[21px] shadow-lg shadow-green/10 sm:mt-0 sm:w-screen sm:rounded-none md:mt-[24px] md:w-[80vw] md:rounded-lg">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="ml-[40px] hidden lg:flex">{menuItems}</div>
        <div className="ml-[80px] hidden flex-1 items-center justify-start lg:flex"></div>
        <div className="hidden items-center justify-between lg:flex">
          <button className="primary-button">Book a trip</button>
        </div>
        <Drawer menus={menus} />
      </div>
    </div>
  );
}

export default Header;
