import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/trending",
    label: "Trending",
  },
];

export const Navbar: React.FC = () => {
  const { route } = useRouter();

  return (
    <nav className="space-x-6 bg-white shadow-sm">
      <div className="container flex items-center justify-between mx-auto space-x-6">
        <div className="flex items-center space-x-8">
          <div className="flex items-center p-5 space-x-2 text-white bg-brand-dark-blue">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path d="M232.3,114.3,88.3,26.4a15.5,15.5,0,0,0-16.1-.3A15.8,15.8,0,0,0,64,40V216a15.8,15.8,0,0,0,8.2,13.9,15.5,15.5,0,0,0,16.1-.3l144-87.9a16,16,0,0,0,0-27.4Z"></path>
              </svg>
            </div>

            <span className="text-xl font-semibold">Movie App</span>
          </div>

          <ul className="flex items-center">
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                <a>
                  <li
                    className={`h-full p-5 text-lg font-medium text-brand-dark-blue transition-colors hover:bg-gray-200 ${
                      route === link.href && "bg-gray-200"
                    }`}
                  >
                    {link.label}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>

        <ul className="flex items-center space-x-2">
          <li className="flex items-center space-x-4 ">
            <span className="text-lg">Eggsy</span>

            <div className="flex items-center space-x-2">
              <Image
                src="https://github.com/eggsy.png"
                width={32}
                height={32}
                className="rounded-full"
                alt="user avatar"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="208 96 128 176 48 96"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></polyline>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
