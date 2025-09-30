import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="font-sans tracking-wide bg-slate-100 py-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-[#101010] font-semibold text-lg mb-6">
              Toronto Sauna
            </h1>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:text-[#FFA726]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/quote"
                  className="hover:underline hover:text-[#FFA726]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[#101010] font-semibold text-lg mb-6">
              Socials
            </h1>
            <ul className="space-y-5">
              {/* <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                              
                              
                     
                           
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                               
                              
                                <FaTwitter />

                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                              
                               
                                  <FaInstagram />
                            </li>
                        </ul> */}
              {/* <li>
              <Link href="/" className="hover:underline hover:text-[#FFA726]  transition-all"><FaFacebook /></Link>
            </li> */}
              <li>
                <a
                  href="https://www.instagram.com/thetorontosaunaco/"
                  className="hover:underline hover:text-[#FFA726]"
                  alt="Instagram Link"
                  aria-label="Instagram Link"
                >
                  <FaInstagram />
                </a>
              </li>
              {/* <li><a href="/services" className="hover:underline hover:text-[#FFA726]"><FaTwitter /></a></li> */}
            </ul>
          </div>

          <div>
            <h1 className="text-[#101010] font-semibold text-lg mb-6">
              Company
            </h1>
            <ul className="space-y-5">
              {/* <li>
              <Link href="/" className="hover:underline hover:text-[#FFA726]  transition-all">Our Story</Link>
            </li> */}
              <li>
                <a
                  href="/blog"
                  className="hover:underline hover:text-[#FFA726]"
                  alt="Blog Link"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:underline hover:text-[#FFA726]"
                  alt="Terms Of Service Link"
                >
                  Terms Of Service
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:underline hover:text-[#FFA726]"
                  alt="Refund Policy Link"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Add the Map instead of the Newsletter */}

          <div>
            <h1 className="mb-4 text-xl font-semibold text-orange-300">
              Find Us
            </h1>
            <div className="rounded-lg overflow-hidden w-full h-48 border-2 border-orange-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1234567890123!2d-79.63026428222656!3d43.991024017333984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPathways%20to%20Perennials!5e0!3m2!1sen!2sca!4v1747678349536!5m2!1sen!2sca&markers=color:red%7C43.991024017333984,-79.63026428222656"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of The Toronto Sauna Co."
              ></iframe>
            </div>
          </div>

          {/* <div>
            <h1 className="text-2xl font-bold mb-4">Newsletter</h1>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded bg-slate-200 text-white"
              />
              <button
                type="submit"
                className="p-2 rounded bg-black hover:bg-[#f6ba60] text-white"
                alt="Subscribe Button"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-gray-300 text-[15px]">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://www.thetorontosaunaco.com/"
              className="hover:underline mx-1"
              alt="Toronto Sauna Co Link"
            >
              Toronto Sauna Co
            </Link>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
