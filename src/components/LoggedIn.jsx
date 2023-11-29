function LoggedIn() {
  return (
    <div>
      <a href="/mypage">
        <button className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
          mypage
        </button>
      </a>
      <a href="/etc">
        <button className="bg-green-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-green-400 transition ease-in-out delay-70">
          etc
        </button>
      </a>
      <a href="/logout">
        <button className="bg-teal-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
          logout
        </button>
      </a>
    </div>
  );
}

export default LoggedIn;
