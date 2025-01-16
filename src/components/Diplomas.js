import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>Full-Time Diplomas</h1>

      <ul className="categories">
        {diplomas.map(cat => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
