import React from "react";
import { useState } from "react";

// You can also use <link> for styles

function Contacts() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="contacts__cont" id="contacts">
      <p
        data-aos="fade-down"
        data-aos-duration="700"
        className="mb-10 text-3xl font-bold"
      >
        GET IN TOUCH
      </p>
      <p
        className="text-lg text-[#a8b2d1]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I am currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I will try my
        best to reach you <span className="text-[#9146ff]">Asap!</span>
      </p>

      <button className="mt-14" data-aos="fade-up" data-aos-duration="1200">
        <a
          href="mailto:fadiahmed298@gmail.com"
          className="email-link __hover"
          target="_blank"
        >
          E-mail Me
        </a>
      </button>
      {/* {open ? (
        <form
          className="w-full md:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <label className="inputlabel">Name</label>
            <div className="inputCont">
              <input
                placeholder="Name"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label className="inputlabel">E-mail</label>
            <div className="inputCont">
              <input
                placeholder="E-mail"
                className="input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputCont">
              <label className="inputlabel">Subject</label>
              <input
                className="input"
                placeholder="Subject"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="inputCont">
              <label className="inputlabel">Message</label>
              <textarea
                className="input__textarea"
                placeholder="Message"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            {loading ? (
              <button
                className="bg-slate-300 text-white py-2 px-6 rounded flex justify-center items-center"
                type="submit"
              >
                <CircularProgress size={23} thickness={4} color="inherit" />
              </button>
            ) : (
              <button
                className="bg-violet-800 hover:bg-violet-500 text-white py-2 px-6 rounded"
                type="submit"
              >
                Send
              </button>
            )}
          </div>
        </form>
      ) : (
        // <button
        //   className="px-6 py-4 font-bold mt-12 rounded text-md border-2 border-violet-700 text-violet-700"
        //   onClick={handleOpen}
        // >
        //   E-mail Me!!
        // </button>
        <form
          className="w-full md:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <label className="inputlabel">Name</label>
            <div className="inputCont">
              <input
                placeholder="Name"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label className="inputlabel">E-mail</label>
            <div className="inputCont">
              <input
                placeholder="E-mail"
                className="input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputCont">
              <label className="inputlabel">Subject</label>
              <input
                className="input"
                placeholder="Subject"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="inputCont">
              <label className="inputlabel">Message</label>
              <textarea
                className="input__textarea"
                placeholder="Message"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            {loading ? (
              <button
                className="bg-slate-300 text-white py-2 px-6 rounded flex justify-center items-center"
                type="submit"
              >
                <CircularProgress size={23} thickness={4} color="inherit" />
              </button>
            ) : (
              <button
                className="bg-violet-800 hover:bg-violet-500 text-white py-2 px-6 rounded"
                type="submit"
              >
                Send
              </button>
            )}
          </div>
        </form>
      )} */}
    </div>
  );
}

export default Contacts;
