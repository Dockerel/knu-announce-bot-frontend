import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { deleteMe, getMyWebhookLink, putMyWebhookLink } from "../api";
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

  // 무슨 권한 문제로 delete가 안됨 cors 관련 같은데 뭐지
  const deleteMutation = useMutation({
    mutationFn: deleteMe,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Bye~");
      setTimeout(() => {
        navigate("/");
      }, 1300);
    },
    onError: (err) => {
      toast.dismiss(toastId);
      toast.error("Something went wrong...");
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

  const handleYesDelete = (e) => {
    e.preventDefault();
    deleteMutation.mutate();
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    toast((t) => (
      <div className=" flex-col">
        <span className=" block px-10 py-5 text-lg font-bold">
          Delete account?
        </span>
        <div className="flex justify-between px-10">
          <button
            onClick={handleYesDelete}
            className=" font-semibold bg-gray-200 px-3 py-2 mr-2 rounded-md text-sm hover:bg-gray-300 transition ease-in-out delay-70"
          >
            Yes ✅
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className=" font-semibold bg-gray-200 px-3 py-2 ml-2 rounded-md text-sm hover:bg-gray-300 transition ease-in-out delay-70"
          >
            No ❌
          </button>
        </div>
      </div>
    ));
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
                defaultValue={
                  isLoading ? "" : data === undefined ? url : data.link
                }
              />
              <input
                type="submit"
                className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-500 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
                value="Submit"
              />
            </form>
            <button className="focus:border-none" onClick={handleDeleteClick}>
              <span className="block text-xl mt-5 text-gray-400 hover:text-red-600 underline font-semibold transition ease-in-out delay-70">
                Delete account? &rarr;
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MyPage;
