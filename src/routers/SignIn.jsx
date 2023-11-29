import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "../api";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [toastId, setToastId] = useState();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signIn,
    onMutate: () => {
      setToastId(toast.loading("Waiting..."));
    },
    onSuccess: (data) => {
      toast.dismiss(toastId);
      toast.success("Successfully logged in!");
      setTimeout(() => {
        navigate("/");
      }, 1300);
    },
    onError: (err) => {
      console.log(err);
      toast.error("Check your username / password.");
    },
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    mutation.mutate(values);
  };

  return (
    <div>
      <Toaster />
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <span className="block font-bold text-5xl mb-6">SignIn</span>
        <form method="post" className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
            placeholder="Username"
            name="username"
            required
            onChange={handleChange}
            value={values.username}
          />
          <input
            type="password"
            className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none w-72"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
            value={values.password}
          />
          <input
            type="submit"
            className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-500 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
            value="Submit"
          />
        </form>
        <a href="#">
          <span className="block text-xl mt-5 text-gray-400 hover:text-gray-600 underline font-semibold">
            Forgot Password? &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}

export default SignUp;
