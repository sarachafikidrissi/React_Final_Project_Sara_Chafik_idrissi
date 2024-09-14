import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { useAuth } from "../../context";

const SignUp = () => {
  const navigate = useNavigate();

  const { userData, SignUp } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    SignUp(firstName, lastName, email, password);
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    navigate('/login')
    
};

  return (
    <div className="flex sm:px-[10vw]  pb-[5vw] ">
      <div className="sm:w-[60vw] w-full p-4 flex flex-col gap-y-3 ">
        <h1 className="text-3xl">Create Account</h1>
        <span className="font-bold font-sans text-[#888888]">
          Your Personal Details
        </span>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className=" border border-[#b8b8b8] p-2"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className=" border border-[#b8b8b8] p-2"
            placeholder="Last Name"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border border-[#b8b8b8] p-2"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border border-[#b8b8b8] p-2"
            placeholder="Password"
          />
          <span>Forgot Password?</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <button onClick={handleSubmit} className="text-white bg-black px-6 py-1.5 w-fit flex items-center justify-center cursor-pointer">
            <TiUser className="text-xl" />
            CREATE
          </button>
          or
          <span
            onClick={() => {
              navigate("/");
            }}
            className="hover:text-orange-600 cursor-pointer"
          >
            {" "}
            Return to Store
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
