function SignUp() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <span className="block font-bold text-5xl mb-6">SignUp</span>
      <form method="post" className="flex flex-col">
        <input
          type="text"
          className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
          placeholder="Username"
        />
        <input
          type="password"
          className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
          placeholder="Password"
        />
        <input
          type="password"
          className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none w-72"
          placeholder="Password Check"
          name="password_check"
        />
        <input
          type="submit"
          className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-500 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
          value="Submit"
        />
      </form>
      <a href="/signin">
        <span className="block text-xl mt-5 text-gray-400 hover:text-gray-600 underline font-semibold">
          Already have an account? &rarr;
        </span>
      </a>
    </div>
  );
}

export default SignUp;
