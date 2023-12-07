import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { getMyWebhookLink } from "../api";
import { useQuery } from "@tanstack/react-query";

function MyPage() {
  const [values, setValues] = useState({
    webhookurl: "",
  });
  const { isLoading, data, isError } = useQuery({
    queryKey: ["myLink"],
    queryFn: () => getMyWebhookLink(),
    retry: false,
  });
  console.log(data);

  // const mutation = useMutation({
  //   mutationFn: signIn,
  //   onMutate: () => {
  //     setToastId(toast.loading("Waiting..."));
  //   },
  //   onSuccess: (data) => {
  //     toast.dismiss(toastId);
  //     toast.success("Successfully logged in!");
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 1300);
  //   },
  //   onError: (err) => {
  //     toast.dismiss(toastId);
  //     toast.error("Check your username / password.");
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <div>
      {isLoading ? (
        <>
          <div className="animate-pulse flex flex-col w-screen h-screen justify-center items-center">
            <span className="block font-bold text-5xl mb-6">MyPage</span>
            <form
              method="post"
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72 bg-gray-300"
              />
              <input
                type="submit"
                className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-400 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
                value="Loading..."
              />
            </form>
          </div>
        </>
      ) : (
        <>
          <Toaster />
          <div className="flex flex-col w-screen h-screen justify-center items-center">
            <span className="block font-bold text-5xl mb-6">MyPage</span>
            <form
              method="post"
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
                placeholder="Discord Web Hook Url"
                name="webhookurl"
                required
                value={data === undefined ? "" : data.link}
              />
              <input
                type="submit"
                className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-500 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
                value="Submit"
              />
            </form>
            <a href="#">
              <span className="block text-xl mt-5 text-gray-400 hover:text-red-600 underline font-semibold transition ease-in-out delay-70">
                Delete account? &rarr;
              </span>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default MyPage;
