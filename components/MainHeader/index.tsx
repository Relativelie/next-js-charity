import NavLink from './NavLink';

const MainHeader = () => {
  return (
    <nav>
      <ul className="fixed z-50 mr-auto flex w-full justify-end gap-10 bg-secondary/85 p-6">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/activities">Activities</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="h-20"></div>
    </nav>
  );
};

export default MainHeader;
