import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { fadeIn, slideIn } from "../../utils/motion";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xka9sa5",
        "template_bt0bddb",
        {
          from_name: form.name,
          to_name: "Sumit",
          from_email: form.email,
          to_email: "vplusenterprises111@gmail.com",
          message: form.message,
        },
        "deKcRFtq638xqPmnO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (Error) => {
          setLoading(false);
          console.log(Error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row bg-black-100 rounded-2xl flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn("left", "between", 0.2, 1)}
          className={`flex-[0.75] hidden md:block bg-black-100 p-8 rounded-2xl`}
        >
          <h3
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
          >
            Address
          </h3>
          <p
            className={`sm:text-[18px] text-[14px] m-5 uppercase tracking-wider text-white`}
          >
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-2">
                <p>
                  Building-Shiv Apartments Street no. 4c , Dhulsiras, Dwarka
                  Sector-24, New Delhi
                </p>
              </li>
              <li class="mb-4">
                <p>MOBILE NO. : 9717483668, 8527653085</p>
              </li>
              <li class="mb-4">
                EMAIL:
                <a href="mailto:Vplusenterprises111@gmail.com">
                  Vplusenterprises111@gmail.com{" "}
                </a>
                <a href="mailto:Singhsumit3993@gmail.com">
                  Singhsumit3993@gmail.com
                </a>
              </li>
            </ul>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "between", 0.2, 1)}
          className={`flex-[0.75] bg-black-100 p-8 rounded-2xl`}
        >
          <p
            className={`sm:text-[18px] text-[14px] uppercase tracking-wider text-white`}
          >
            Get in Touch
          </p>
          <h3
            className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
          >
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name ? "
                className="bg-tertiary py-4 px-6 placeholder:text-white text-black 
              rounded-lg outline-none border-none font-medium "
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email ? "
                className="bg-tertiary py-4 px-6 placeholder:text-white text-black 
              rounded-lg outline-none border-none font-medium "
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say? "
                className="bg-tertiary py-4 px-6 placeholder:text-white text-black 
              rounded-lg outline-none border-none font-medium "
              />
            </label>
            <button
              type="submit"
              className=" bg-tertiary py-3 px-8 otline-none w-fit text-white 
          font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(ContactPage, "contact");
