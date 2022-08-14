import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

const NavigationBar = () => {
  const user = useUser();
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav">
        <div className="h-[80px] hidden sm:inline-flex border-b-2 w-full justify-end shadow-lg shadow-blue-500/20">
            <div>
                <Menu as="div" className="relative">
                    <Menu.Button className="p-4 flex items-center justify-end">
                        <Image src={user?.user?.picture} alt="User Profile" className="rounded-full" height={50} width={50} />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/api/auth/logout">
                                        <p className={classNames(active ? 'bg-gray-100' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700')}>Sign out</p>
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    </Disclosure>
  )
}

export default NavigationBar