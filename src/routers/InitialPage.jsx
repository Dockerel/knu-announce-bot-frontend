import useUser from "../lib/useUser";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";
function InitialPage() {
  const { userLoading, isLoggedIn, user } = useUser();
  return (
    <div className="flex  flex-col w-screen h-screen justify-center items-center">
      <a href="/">
        <div className="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
          KNU COMP Crawler
        </div>
      </a>
      <div>
        {!userLoading ? !isLoggedIn ? <LoggedOut /> : <LoggedIn /> : null}
      </div>
    </div>
  );
}

export default InitialPage;
