function LoggedOut() {
  return (
    <div>
      <a href="/signin">
        <button className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
          SignIn
        </button>
      </a>
      <a href="/signup">
        <button className="bg-teal-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
          SignUp
        </button>
      </a>
    </div>
  );
}

export default LoggedOut;
