import { NavLink } from "react-router-dom";

export default function Navlinks({ navigation }) {
  return (
    <div className="flex items-center">
      <div className="flex gap-10 hidden md:flex">
        {navigation.map((e) => (
          <NavLink to={e.to}>{e.name}</NavLink>
        ))}
      </div>
    </div>
  );
}
