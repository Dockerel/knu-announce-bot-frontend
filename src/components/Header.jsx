import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../lib/useUser";

function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  return (
    <div className="relative">
      <a
        href="/"
        className="absolute top-14 left-20 text-3xl text-gray-400 hover:text-gray-500 transition ease-in-out delay-70"
      >
        <FontAwesomeIcon icon={faHome} />
      </a>
      <div className="absolute top-14 right-20">
        {!userLoading ? (
          !isLoggedIn ? null : (
            <span className="text-3xl font-semibold">{user.username}</span>
          )
        ) : null}
      </div>
    </div>
  );
}

export default Header;
