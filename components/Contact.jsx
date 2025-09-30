"use client";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = ({ defaultSubject = "" }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState(defaultSubject);

  // Update subject when defaultSubject prop changes
  useEffect(() => {
    setSubject(defaultSubject);
  }, [defaultSubject]);

  const sendEmails = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone?.value || "",
      message: e.target.message.value,
      subject: subject || e.target.subject.value, // Use state value or fallback to input value
      isConsultation: false,
    };

    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dataResponse = await res.json();
      if (dataResponse.message === "Email sent successfully!") {
        setLoading(false);
        toast.success("Email sent successfully!", { duration: 2700 });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      toast.error("Error sending email. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="mb-12 mt-16">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white rounded-md font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">
            Toronto Sauna Co
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            Have a question or just want to say hi? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
          {/* <div className="mt-8">
            <Link
              href="/consultation"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-[#f9bd63] transition-colors"
            >
              Book a Consultation →
            </Link>
          </div> */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <a
                href="https://www.instagram.com/thetorontosaunaco/"
                alt="Instagram Link"
              >
                {" "}
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4" onSubmit={sendEmails}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full text-gray-800 rounded-lg py-2.5 px-4 border text-sm outline-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="6"
            id="message"
            required
            className="w-full text-gray-800 rounded-lg px-4 border text-sm pt-2.5 outline-blue-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-black hover:bg-[#f9bd63] rounded-xl text-sm px-4 py-3 w-full !mt-6 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
