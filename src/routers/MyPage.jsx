function MyPage() {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <span className="block font-bold text-5xl">MyPage</span>
        <a href="/">
          <span className="block text-2xl mt-5 text-gray-400 hover:text-gray-600 underline">
            Back to Home &rarr;
          </span>
        </a>
      </div>
    );
  }
  
  export default MyPage;
  