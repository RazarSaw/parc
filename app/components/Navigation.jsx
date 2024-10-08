"use client";
import { CiCircleInfo } from "react-icons/ci";
import { LuRadioTower, LuWheat } from "react-icons/lu";
import { IoMdWifi } from "react-icons/io";
import {
  MdOutlineGroups2,
  MdEmergency,
  MdOutlineCardMembership,
} from "react-icons/md";
import { FaHome, FaExternalLinkAlt, FaStore } from "react-icons/fa";

import { GoSponsorTiers } from "react-icons/go";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const products = {
  "Ham Radio Resources": [
    {
      name: "Ham Radio Info",
      description:
        "Interested in getting started, practicing for the exam, or a bit of ham history? ",
      href: "/parc/ham-radio-resources/ham-radio-info.html",
      icon: CiCircleInfo,
      target: ""
    },
    {
      name: "Repeaters, EchoLink & IRLP",
      description:
        "PARC has a vast netwok of EchoLink & IRLP linked repeaters located in the province.",
      href: "/parc/ham-radio-resources/repeaters-echolink-and-irlp.html",
      icon: LuRadioTower,
      target: ""
    },
    {
      name: "Nets",
      description: "PARC hosts and participates in various nets. Come join us!",
      href: "/parc/ham-radio-resources/nets.html",
      icon: MdOutlineGroups2,
      target: ""
    },
  ],
  "Community & Support": [
    {
      name: "Local Info",
      description:
        "PARC has a rich history for its grass roots in Saskatchewan.",
      href: "/parc/community-and-support/local-info.html",
      icon: FaHome,
      target: ""
    },
    {
      name: "Links",
      description: "Find hundreds of links available at your disposile.",
      href: "/parc/community-and-support/links.html",
      icon: FaExternalLinkAlt,
      target: ""
    },
    {
      name: "Membership",
      description:
        "Our efforts would not be possible without the people who make it up!",
      href: "/parc/community-and-support/membership.html",
      icon: MdOutlineCardMembership,
      target: ""
    },
    {
      name: "Sponsors",
      description:
        "Over the years, we've had exceptional entities sponsor our club.",
      href: "/parc/community-and-support/sponsors.html",
      icon: GoSponsorTiers,
      target: ""
    },
  ],
  "Swap N' Shop": [
    {
      name: "Hamshack",
      description: "Scout for items all around with Hamshack!",
      href: "https://hamshack.ca/organization/parkland-amateur-radio-club/",
      icon: FaStore,
      target: "_blank"
    },
    {
      name: "Saskatchewan Ham Radio Swap and Shop",
      description: "Access local supplies from local hams",
      href: "https://www.va5bug.net/",
      icon: LuWheat,
      target: "_blank"
    },
  ],
};

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-800 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto container flex items-center justify-between px-8 py-4 "
      >
        <div className="flex lg:flex-1">
          <a href="/parc" className="-m-1.5 p-1.5">
            <span className="sr-only">Parkland Amateur Radio Club</span>
            <img
              width={32}
              height={32}
              alt="Parkland Amateur Radio Club logo (globe with the province of Saskatchewan outlined, and Parkland Amateur Radio Club text)"
              src="/parc/images/logos/logo.png"
              className="h-8 w-auto hover:scale-[1.1] transition-all"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {Object.keys(products).map((category) => (
            <Popover className="relative" key={category}>
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                {category}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-white"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-[50%] -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-neutral-700 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products[category].map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-neutral-600 transition-colors"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-600 group-hover:bg-neutral-500 transition-colors">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-white group-hover:text-blue-200"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          target={item.target}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-neutral-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/parc/community-and-support/membership.html"
            className="text-sm font-bold leading-6 text-blue-200"
          >
            Become A Member! <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-8 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/parc">
              <span className="sr-only">Parkland Amateur Radio Club</span>
              <img
                alt="Parkland Amateur Radio Club logo (globe with the province of Saskatchewan outlined, and Parkland Amateur Radio Club text)"
                src="/parc/images/logos/logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className=" rounded-md "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Object.keys(products).map((category) => (
                  <Disclosure key={category} as="div" className="-mx-3">
                    <DisclosureButton className="group text-white flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-neutral-700 transition-all duration-300">
                      {category}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {products[category].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          target={item.target}
                          className="block rounded-lg py-2 pl-8 pr-3 text-sm font-semibold leading-7 text-neutral-300 hover:bg-neutral-700"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
