import { NavLink } from "react-router-dom";

export default function NavlinksModal({ navigation, toggleIsOpened }) {
  return (
    <div className="flex flex-col text-white text-2xl gap-5 pointer-events-auto">
      {navigation.map((e) => (
        <NavLink to={e.to} onClick={toggleIsOpened}>
          {e.name}
        </NavLink>
      ))}
    </div>
  );
}
