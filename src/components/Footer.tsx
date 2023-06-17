import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "../constants/index";

export function Footer() {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex w-full flex-1 flex-wrap gap-20 max-md:mt-10 md:justify-end">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex min-w-[170px] flex-col gap-6 text-base"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between space-x-3 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 CarHub. All rights reserved</p>

        <div className="flex flex-1 justify-center gap-8 max-sm:mt-4 sm:justify-end">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
