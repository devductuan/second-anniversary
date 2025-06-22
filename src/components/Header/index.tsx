import React from "react";

type Props = {};

const navs = [
  { name: "Home", path: "/" },
  { name: "300 Days", path: "https://legendary-tapioca-c2ddc4.netlify.app/" },
  {
    name: "Anniversary 1",
    path: "https://anniversary-anh-yeu-em.netlify.app/",
  },
  { name: "Anniversary 2", path: "/anni" },
];

function Header({}: Props) {
  return (
    <nav className=" p-4 bg-white shadow-md">
      <ul className="flex justify-between items-center p-4">
        {navs.map((nav) => (
          <li key={nav.name}>
            <a
              href={nav.path}
              className="text-blue-500 hover:text-blue-700">
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
