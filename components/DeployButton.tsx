import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-5 ">
      <a href="#"
      className="text-xl font-bold">
        Script <span className="bg-orange-400 text-black rounded-md px-1">Hub</span>
      </a>
      <ul className="flex flex-auto gap-4">
        <li>
        <Link href='#'>
        Script
        </Link>
        </li>
        <li>
        <Link href='#'>
        Test
        </Link>
        </li>
        <li>
        <Link href='#'>
        Test
        </Link>
        </li>
      </ul>
    </nav>
  );
}
