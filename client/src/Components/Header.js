import { Fragment, useState, useContext } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import Morocco from '../images/Morocco.png'
import SignOut from '../Pages/SignOut'
import { AuthContext } from "../Pages/AuthContext";
import '../Pages/Home.css'

const pages = [
  { name: 'ELEGANCY LADY', to: '/', current: true },
  { name: 'CART', to: '/Cart', current: false },
  { name: 'FAVORITES', to: '/Favorites', current: true },
  { name: 'ABOUT US', to: '/AboutUs', current: true },
  { name: '', to: '/SignIn', current: false },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const { isLogin, username } = useContext(AuthContext);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative flex w-1/2 max-w-xs flex-col overflow-y-auto bg-gray-900 pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button type="button" className="relative -m-3 mb-0 inline-flex items-center justify-center rounded-md p-2 text-amber-400" onClick={() => setOpen(false)}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  <p className='ml-4 text-lg'>Hide</p>
                </button>
              </div>
              <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                {pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link to={page.to} className="-m-2 block p-2 font-medium text-amber-400">
                      {page.name}
                    </Link>
                  </div>
                ))}
                {isLogin ? (
                  <Link to="/CreateProduct" className="text-md font-medium text-amber-400 hover:text-amber-300">
                    CREATE
                  </Link>
                ) : (
                  <Link></Link>
                )}
              </div>
              <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                {isLogin ? (
                  <div className=" items-center">
                    <span className="mr-4 font-medium text-amber-400 hover:text-amber-300">
                      {username} ⚜️</span> <br /><br />
                    <button className=" font-medium text-amber-400 hover:text-amber-300">
                      <SignOut />
                    </button>
                  </div>
                ) : (
                  <Link to="/SignIn" className="font-medium text-amber-400 hover:text-amber-300">
                    Sign In</Link>
                )}
                <div className="flow-root">
                  <Link to="/Registration" className="-m-2 block p-2 font-medium text-amber-400">
                    Create Account
                  </Link>
                </div>
              </div>
              <div className="border-t border-amber-400 px-4 py-6">
                <Link to="#" className="-m-2 -mt-6 flex items-center p-2">
                  <img src={Morocco} alt="" className="block h-auto w-5 flex-shrink-0" />
                  <span className="ml-3 block text-base font-medium text-amber-400">MAD</span>
                </Link>
              </div>
              <img className="w-auto mt-6" src={Logo} alt="" />
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root> */}

    {/* <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-1/2 max-w-xs flex-col overflow-y-auto bg-gray-900 pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="relative -m-3 mb-0 inline-flex items-center justify-center rounded-md p-2 text-amber-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  <p className='ml-4 text-lg'>Hide</p>
                </button>
              </div>

              <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                {pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link to={page.to} className="-m-2 block p-2 font-medium text-amber-400">
                      {page.name}
                    </Link>
                  </div>
                ))}
                {isLogin ? (
                  <Link to="/CreateProduct" className="text-md font-medium text-amber-400 hover:text-amber-300">
                    CREATE
                  </Link>
                ) : (
                  <Link></Link>
                )}
              </div>

              <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                {isLogin ? (
                  <div className="items-center">
                    <span className="mr-4 font-medium text-amber-400 hover:text-amber-300">
                      {username} ⚜️
                    </span>
                    <br />
                    <br />
                    <button className="font-medium text-amber-400 hover:text-amber-300">
                      <SignOut />
                    </button>
                  </div>
                ) : (
                  <Link to="/SignIn" className="font-medium text-amber-400 hover:text-amber-300">
                    Sign In
                  </Link>
                )}
                <div className="flow-root">
                  <Link to="/Registration" className="-m-2 block p-2 font-medium text-amber-400">
                    Create Account
                  </Link>
                </div>
              </div>

              <div className="border-t border-amber-400 px-4 py-6">
                <Link to="#" className="-m-2 -mt-6 flex items-center p-2">
                  <img src={Morocco} alt="" className="block h-auto w-5 flex-shrink-0" />
                  <span className="ml-3 block text-base font-medium text-amber-400">MAD</span>
                </Link>
              </div>
              <img className="w-auto mt-6" src={Logo} alt="" />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root> */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
          <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex w-1/2 max-w-xs flex-col overflow-y-auto bg-gray-900 pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button type="button" className="relative -m-3 mb-0 inline-flex items-center justify-center rounded-md p-2 text-amber-400"
                    onClick={() => setOpen(false)}>
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    <p className='ml-4 text-lg'>Hide</p>
                  </button>
                </div>

  

                <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                  {pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={page.to} className="-m-2 block p-2 font-medium text-amber-400">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                  {isLogin ? (
                    <Link to="/CreateProduct" className="text-md font-medium text-amber-400 hover:text-amber-300">
                      CREATE
                    </Link>
                  ) : (
                    <Link></Link>
                  )}
                </div>

                <div className="space-y-6 border-t border-amber-400 px-4 py-6">
                  {isLogin ? (
                    <div className=" items-center">
                      <span className="mr-4 font-medium text-amber-400 hover:text-amber-300">
                        {username} ⚜️</span> <br /><br />
                      <button className=" font-medium text-amber-400 hover:text-amber-300">
                        <SignOut />
                      </button>
                    </div>
                  ) : (
                    <Link to="/SignIn" className="font-medium text-amber-400 hover:text-amber-300">
                      Sign In</Link>
                  )}
                  <div className="flow-root">
                    <Link to="/Registration" className="-m-2 block p-2 font-medium text-amber-400">
                      Create Account
                    </Link>
                  </div>
                </div>

                <div className="border-t border-amber-400 px-4 py-6">
                  <Link to="#" className="-m-2 -mt-6 flex items-center p-2">
                    <img src={Morocco}
                      alt="" className="block h-auto w-5 flex-shrink-0" />
                    <span className="ml-3 block text-base font-medium text-amber-400">MAD</span>
                  </Link>
                </div>
                <img className="w-auto mt-6"
                  src={Logo}
                  alt="" />

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* ------------------------------ For Destop ------------------------- */}
      <header className="relative bg-black">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="border-b border-amber-300">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-black p-2 text-amber-300 md:hidden"
                onClick={() => setOpen(true)}>
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className=" ml-16 flex md:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-12 lg:w-32"
                    src={Logo}
                    alt="" />
                </Link>
              </div>

              {/* Flyout menus was here */}

              <Popover.Group className="hidden md:ml-8 md:block md:self-stretch">
                <div className="flex h-full space-x-8">
                  {pages.map((page) => (
                    <Link key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-amber-300">
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
              {isLogin ? (
                <Link to="/CreateProduct" className="hide-when-mobile text-sm font-medium text-gray-300 hover:text-amber-300">
                  CREATE
                </Link>
              ) : (
                <Link></Link>
              )}
              <div className="ml-auto flex items-center">
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                  {isLogin ? (
                    <div className="flex items-center">
                      <span className="mr-4 text-sm font-medium text-amber-300 hover:text-amber-300">
                        ⚜️ {username} ⚜️</span>
                      <button className="text-sm font-medium text-gray-300 hover:text-amber-300">
                        <SignOut />
                      </button>
                    </div>
                  ) : (
                    <Link to="/SignIn" className="text-sm font-medium text-gray-300 hover:text-amber-300">
                      Sign In</Link>
                  )}
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="/Registration" className="text-sm font-medium text-gray-300 hover:text-amber-300">
                    Create Account
                  </Link>
                </div>
                {/* Flag */}
                <div className="hidden md:ml-8 md:flex">
                  <Link to="#" className="flex items-center text-gray-300 hover:text-amber-300">
                    <img
                      src={Morocco}
                      alt=""
                      className="block h-auto w-5 flex-shrink-0" />
                    <span className="ml-3 block text-sm font-medium">MAD</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div>
                {/* Search */}
                <div className="flex md:ml-6">
                  <Link to="#" className="p-2 text-amber-300 lg:text-gray-300 hover:text-amber-300">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root md:ml-6">
                  <Link to="/Cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-amber-300 lg:text-gray-300 group-hover:text-amber-300"
                      aria-hidden="true" />
                    <Link to="#" className="ml-2 text-sm font-medium text-gray-300 group-hover:text-amber-300">
                      {/* 0 */}
                    </Link>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header






































































































































































// import React from 'react'
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'

// const navigation = [
//   { name: 'E-commerce', to: '/', current: true },
//   { name: 'Shopping Card', to: '/ShoppingCard', current: false },
//   { name: 'Saved Items', to: '/Saved', current: false },
//   { name: 'Sign In', to: '/SignIn', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const Headerr = () => {
//   return (
//     <>
//       <header >
//         <Disclosure as="nav" className="bg-gray-800">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-7xl px-2 sm:px-6 md:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                   <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

//                     <div> Mobile menu button</div>

//                     <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                       <span className="absolute -inset-0.5" />
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                   <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                     <div className="flex flex-shrink-0 items-center">
//                       <img
//                         className="h-8 w-auto"
//                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                         alt="Your Company" />
//                     </div>
//                     <div className="hidden sm:ml-6 sm:block">
//                       <div className="flex space-x-4">
//                         {navigation.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.to}
//                             className={classNames(
//                               item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                               'rounded-md px-3 py-2 text-sm font-medium')}
//                             aria-current={item.current ? 'page' : undefined}>
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                     <button
//                       type="button"
//                       className="relative rounded-full bg-gray-800 p-1 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>

//                     <div> Profile dropdown </div>

//                     <Menu as="div" className="relative ml-3">
//                       <div>
//                         <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                           <span className="absolute -inset-1.5" />
//                           <span className="sr-only">Open user menu</span>
//                           <img
//                             className="h-8 w-8 rounded-full"
//                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                             alt="" />
//                         </Menu.Button>
//                       </div>
//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95">
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <Menu.Item>
//                             {({ active }) => (
//                               <Link to="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-300')}>
//                                 Your Profile
//                               </Link>)}
//                           </Menu.Item>
//                           <Menu.Item>
//                             {({ active }) => (
//                               <Link to="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-300')}>
//                                 Settings
//                               </Link>)}
//                           </Menu.Item>
//                           <Menu.Item>
//                             {({ active }) => (
//                               <Link to="/" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-300')}>
//                                 Sign out
//                               </Link>)}
//                           </Menu.Item>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="sm:hidden">
//                 <div className="space-y-1 px-2 pb-3 pt-2">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="Link"
//                       to={item.to}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}>
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       </header>
//     </>
//   )
// }

// export default Headerr