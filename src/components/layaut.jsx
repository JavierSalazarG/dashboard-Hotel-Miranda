import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/Room"}>Room</Link>
          </li>
          <li>
            <Link to={"/Bookings"}>Bookings</Link>
          </li>
          <li>
            <Link to={"/Guest"}>Guest</Link>
          </li>
          <li>
            <Link to={"/Concierge"}>Concierge</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
