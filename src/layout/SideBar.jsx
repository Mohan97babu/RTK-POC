import { Icon } from "@iconify/react/dist/iconify.js";
import { Link,useLocation } from "react-router-dom";

const SideBar = ({setPage}) => {

  const location = useLocation();

  const menuItems = [
    { path: "/bill", icon: "solar:bill-list-line-duotone", label: "Bill" },
    { path: "/schools", icon: "cil:building", label: "Schools" },
    { path: "/posts", icon: "dashicons:products", label: "Posts" }
  ]
  location.pathname ==="/posts" ? setPage(true) : setPage(false)
  return (
    <>
      <ul className={`list-unstyled h-100 p-2 mb-0 bg-second`}>
        {menuItems.map((items, index) => (
          <Link key={index} to={items.path} className="text-decoration-none" ><li className={`d-flex align-items-center mb-3 ${location.pathname === items.path ? "active p-2 rounded-2" : ""} `}><Icon icon={items.icon} className="bg-text me-2"></Icon><span className="bg-text">{items.label}</span></li></Link>
        ))}
      </ul>
    </>
  );
}
export default SideBar;