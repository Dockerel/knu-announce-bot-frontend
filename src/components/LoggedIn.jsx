import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../api";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function LoggedIn() {
  const queryClient = useQueryClient();
  const [toastId, setToastId] = useState();
  const mutation = useMutation({
    mutationFn: signOut,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Bye~");
      setTimeout(() => {
        queryClient.refetchQueries({ queryKey: ["me"] });
      }, 1300);
    },
    onError: (err) => {
      toast.dismiss(toastId);
      toast.error("Logout error!");
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <div>
      <Toaster />
      <a href="/mypage">
        <button className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70">
          mypage
        </button>
      </a>
      <a href="/send">
        <button className="bg-green-500 h-24 w-48 ml-5 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-green-400 transition ease-in-out delay-70">
          send
        </button>
      </a>
      <button
        onClick={handleClick}
        className="bg-teal-500 h-24 w-48 ml-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70"
      >
        logout
      </button>
    </div>
  );
}

export default LoggedIn;
