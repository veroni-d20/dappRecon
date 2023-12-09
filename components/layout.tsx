import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { HomeIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const navigation = [
  { name: "Search", href: "/", icon: HomeIcon, current: true },
  {
    name: "Register",
    href: "/register",
    icon: DocumentPlusIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children?: ReactNode;
  pageTitle?: string;
}

export default function Layout({
  children,
  pageTitle = "Untitled Page",
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle + " | polygoncif"}</title>
      </Head>
      <div>
        <div className="min-h-full">
          <div className="bg-black pb-32">
            <Disclosure as="nav" className="bg-yellow-400">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="border-b border-yellow-400">
                      <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-between">
                            <Image
                              className="w-full mt-10"
                              src="/android-chrome-512x512.png"
                              width={50}
                              height={50}
                              alt="polygoncif"
                            />
                            <h1 className="text-white text-3xl ml-3 mt-1">
                              <span className="font-bold">polygoncif</span>
                            </h1>
                          </div>
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline text-6xl space-x-4">
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "bg-yellow-400 text-white"
                                      : "text-yellow-300 hover:bg-yellow-500 hover:text-white",
                                    "rounded-md px-3 py-2 text-sm font-medium"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                          {/* Mobile menu button */}
                          <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XMarkIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="border-b border-yellow-400 md:hidden">
                    <div className="space-y-1 px-2 py-3 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-yellow-400 text-white"
                              : "text-gray-300 hover:bg-yellow-500 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              router.pathname === item.href
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <header className="py-10 mt-2">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  {pageTitle}
                </h1>
              </div>
            </header>
          </div>

          <main className="-mt-32">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
