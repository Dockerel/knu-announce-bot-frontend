function App() {
  return (
    <div class="flex flex-col w-screen h-screen justify-center items-center">
      <a href="/">
        <div class="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
          KNU COMP Crawler
        </div>
      </a>
      <div>
        <a href="https://www.google.com">
          <button class=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
            Signin
          </button>
        </a>
        <a href="https://www.google.com">
          <button class="bg-teal-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
            Signup
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
