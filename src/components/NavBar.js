import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../logo/logo.svg';
import { SocialIcon } from "react-social-icons";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog Posts', href: '/post' },
    { name: 'Projects', href: '/project' },
    { name: 'About Me', href: '/about' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href="/" >
                                        <img
                                            className="block lg:hidden h-16 w-auto"
                                            src={logo}
                                            alt="logo"
                                        />
                                    </a>
                                    <a href="/">
                                        <img
                                            className="hidden lg:block h-16 w-auto"
                                            src={logo}
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-6 p-2">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-6 py-3 rounded-md text-sm font-bold text-lg'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <SocialIcon url="https://linkedin.com/in/keith-sinclair-b25b93135" className="mr-3" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                                <SocialIcon url="https://github.com/KeithRSinclair" className=" mr-3" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                                <SocialIcon network="whatsapp" url="https://wa.me/+27713630284" className=" mr-3" target="_blank" style={{ height: 35, width: 35 }} />
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-2 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium text-sm'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
