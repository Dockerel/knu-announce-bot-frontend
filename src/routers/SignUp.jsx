import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    password_check: "",
  });
  const [toastId, setToastId] = useState();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signUp,
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
      toast.dismiss(toastId);
      toast.error("Maybe change your username or check password!");
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
        <span className="block font-bold text-5xl mb-6">SignUp</span>
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
            required
            onChange={handleChange}
            value={values.password}
            type="password"
            name="password"
            className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none mb-1 w-72"
            placeholder="Password"
          />
          <input
            required
            onChange={handleChange}
            value={values.password_check}
            type="password"
            name="password_check"
            className="border-solid border-2 border-black px-4 py-3 rounded-lg focus-within:outline-none w-72 mb-1"
            placeholder="Password Check"
          />
          <input
            type="submit"
            className="border-solid border-2 px-4 py-3 rounded-lg focus-within:outline-none w-72 mt-1 bg-gray-500 hover:bg-gray-400 text-white transition ease-in-out delay-70 font-semibold text-2xl"
            value="Submit"
          />
        </form>
        <a href="/signin">
          <span className="block text-xl mt-5 text-gray-400 hover:text-gray-600 underline font-semibold transition ease-in-out delay-70">
            Already have an account? &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}

export default SignUp;
