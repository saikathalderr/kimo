'use client';

import { useState } from 'react';
import Link from 'next/link';

import Icon from './icon';
import { Menu } from './header';

import { useEscapeKey } from '@/hooks/useEscapeKey';

type DrawerProps = {
  menus: Menu[];
};

function Drawer(props: DrawerProps) {
  const { menus } = props;

  const [open, setOpen] = useState(false);

  useEscapeKey(() => {
    setOpen(false);
  });

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="md:visible lg:hidden">
        <button onClick={handleDrawer}>
          <Icon name="menu" />
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 z-20 h-full w-full bg-dark/30 ${
          open ? 'visible' : 'invisible'
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`absolute right-0 h-full w-[90%] bg-white p-[24px] transition-all duration-300 ease-in-out
          ${open ? 'right-0' : 'right-[-100%]'}`}
        >
          <div className="flex justify-end">
            <button onClick={handleDrawer}>
              <Icon name="close" />
            </button>
          </div>

          <div className="mt-[50px] flex flex-col pl-[46px]">
            {menus.map((menu) => (
              <div
                key={menu.name}
                className="my-[20px] capitalize hover:underline"
              >
                <Link onClick={handleDrawer} href={menu.link}>
                  {menu.name}
                </Link>
              </div>
            ))}
            <div className="mt-[20px] items-center justify-between">
              <button className="primary-button">Book a trip</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
