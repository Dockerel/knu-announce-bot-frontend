function SignUp() {
  return (
    <div class="flex flex-col w-screen h-screen justify-center items-center">
      <span class="block font-bold text-5xl mb-6">SignIn</span>
      <form method="post" class="flex flex-col">
        <input
          type="text"
          class="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
          placeholder="Username"
          name="username"
        />
        <input
          type="password"
          class="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none w-72"
          placeholder="Password"
          name="password"
        />
      </form>
      <a href="#">
        <span class="block text-xl mt-5 text-gray-400 hover:text-gray-600 underline font-semibold">
          Forgot Password? &rarr;
        </span>
      </a>
    </div>
  );
}

export default SignUp;
