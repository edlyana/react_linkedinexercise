// Cards //
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { moduleId } = useParams();
  const module = getModule(moduleId);  // HOLDS THE INFORMATION OF CHOOSEN CATEGORY

  return (
    <>
      <h2>Modules:</h2>

      <ul className="session-list">
        {module?.sessions.map(session => (
          <li className="session" key={session.id}>

            <NavLink 
            className={({isActive}) => (isActive ? "session-active" : null)}
            to={session.id}>
              <p className="session-name">{session.id} | {session.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
