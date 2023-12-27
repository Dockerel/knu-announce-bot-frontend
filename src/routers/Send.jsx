function Send() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
        Send
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
          Today
        </button>
        <button className=" bg-teal-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
          All
        </button>
      </div>
    </div>
  );
}

export default Send;
