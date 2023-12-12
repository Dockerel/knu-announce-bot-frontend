function Send() {
  return (
    <div>
      <div className="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
        Send
      </div>
      <div>
        <button className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
          Today
        </button>
        <button className=" bg-teal-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70">
          The past 7 days
        </button>
      </div>
    </div>
  );
}

export default Send;
