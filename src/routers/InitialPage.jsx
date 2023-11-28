import useUser from "../lib/useUser";
import ProfilePage from "./ProfilePage";
function InitialPage() {
  const { userLoading, isLoggedIn, user } = useUser();
  return (
    <div class="flex flex-col w-screen h-screen justify-center items-center">
      <a href="/">
        <div class="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
          KNU COMP Crawler
        </div>
      </a>

      {!userLoading ? (
        !isLoggedIn ? (
          <div>
            <a href="/signin">
              <button class=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
                SignIn
              </button>
            </a>
            <a href="/signup">
              <button class="bg-teal-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
                SignUp
              </button>
            </a>
          </div>
        ) : (
          <ProfilePage />
        )
      ) : null}
    </div>
  );
}

export default InitialPage;
