import { useMutation } from "@tanstack/react-query";
import { postSendAll, postSendToday } from "../api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Send() {
  const [toastId, setToastId] = useState();
  const navigate = useNavigate();

  const todayMutation = useMutation({
    mutationFn: postSendToday,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Successfully sended!");
      setTimeout(() => {
        navigate("/");
      }, 1300);
    },
    onError: (err) => {
      toast.dismiss(toastId);
      toast.error("Something went wrong...");
    },
  });

  const allMutation = useMutation({
    mutationFn: postSendAll,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Successfully sended!");
      setTimeout(() => {
        navigate("/");
      }, 1300);
    },
    onError: (err) => {
      toast.dismiss(toastId);
      toast.error("Something went wrong...");
    },
  });

  const handleTodayClick = (e) => {
    e.preventDefault();
    todayMutation.mutate();
  };

  const handleAllClick = (e) => {
    e.preventDefault();
    allMutation.mutate();
  };

  return (
    <div>
      <Toaster />
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="text-5xl mb-12 font-bold hover:text-gray-400 transition ease-in-out delay-100">
          Send
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={handleTodayClick}
            className=" bg-orange-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-orange-400 transition ease-in-out delay-70"
          >
            Today
          </button>
          <button
            onClick={handleAllClick}
            className=" bg-teal-500 h-24 w-48 mr-5 rounded-2xl text-white font-bold text-3xl hover:bg-teal-400 transition ease-in-out delay-70"
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Send;
