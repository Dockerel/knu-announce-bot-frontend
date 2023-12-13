import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getMyWebhookLink, putMyWebhookLink } from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [url, setUrl] = useState("");
  const { isLoading, data, isError } = useQuery({
    queryKey: ["myLink"],
    queryFn: () => getMyWebhookLink(),
    retry: false,
  });
  const [toastId, setToastId] = useState();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: putMyWebhookLink,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Your Url Successfully set!");
      setTimeout(() => {
        navigate("/");
      }, 1300);
    },
    onError: (err) => {
      toast.dismiss(toastId);
      toast.error("Check your url again.");
    },
  });

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let json = new Object();
    json.link = url.trim();
    mutation.mutate(json);
  };
  return (
    <div>
      {isLoading ? (
        <>
          <div className="animate-pulse flex flex-col w-screen h-screen justify-center items-center">
            <span className="block font-bold text-5xl mb-6">MyPage</span>
            <form method="post" className="flex flex-col">
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
                onChange={handleChange}
                defaultValue={isLoading ? "" : data === undefined ? url : data.link}
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
