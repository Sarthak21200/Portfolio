import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqonnqeb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold underline mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gold w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4 text-black">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-black">FullName</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gold leading-tight focus:outline-none focus:shadow-outline bg-black placeholder-gold"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-black">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gold leading-tight focus:outline-none focus:shadow-outline bg-black placeholder-gold"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-black">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gold leading-tight focus:outline-none focus:shadow-outline bg-black placeholder-gold"
              id="message"
              name="message"
              type="text"
              placeholder="Enter your Query"
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-gold rounded-xl px-3 py-2 hover:bg-red-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
