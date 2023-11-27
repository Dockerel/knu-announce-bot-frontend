function NotFound() {
  return (
    <div class="flex flex-col w-screen h-screen justify-center items-center">
      <span class="block font-bold text-5xl">NotFound</span>
      <a href="/">
        <span class="block text-2xl mt-5 text-gray-400 hover:text-gray-600 underline">
          Back to Home &rarr;
        </span>
      </a>
    </div>
  );
}

export default NotFound;
