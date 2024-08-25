import React from "react";

const Input = () => {
  return (
    <div data-aos="fade-left">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col items-center justify-center"
        id="form"
      >
        <input type="hidden" name="access_key" value="f36d6c56-6474-48a7-9fb7-3619ae3d74d0"></input>
        <input
          id="Contact"
          type="text"
          name="fName"
          required
          className="input__theme"
          placeholder="First Name"
        />
        <input type="text" name="lname" placeholder="Last Name" className="input__theme" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="input__theme"
        />
        <textarea
          name="message"
          placeholder="Enter Your Text Here..."
          required
          className="input__theme h-32 resize-none"
        ></textarea>
        <input
          type="submit"
          className="w-[50%] h-10 mt-6 cursor-pointer hover:bg-rose-900 text-lg text-white font-semibold bg-rose-500 rounded-lg"
        />
      </form>
    </div>
  );
};

export default Input;
