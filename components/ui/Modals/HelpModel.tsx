"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full rounded-[12px] px-4 py-3 text-sm border border-[#1B6543] bg-[#006543]/20 text-[#FDFEFB] placeholder:text-[#B8CFC5] focus:outline-none focus:ring-2 focus:ring-[#DAF966] focus:border-transparent transition-all";

function HelpModel({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 10) {
        setFormData((prev) => ({ ...prev, mobile: onlyDigits }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Form
  const handleSubmit = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.mobile.trim()) {
      toast.error("Please enter mobile number");
      return;
    }
    if (formData.mobile.length !== 10) {
      toast.error("Mobile number must be 10 digits");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!formData.city) {
      toast.error("Please select your city");
      return;
    }

    toast.success("Thank you for contacting us! We will get back to you soon.");

    setFormData({ name: "", mobile: "", email: "", city: "", message: "" });

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              className="fixed inset-0 bg-[#092317]/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={onClose}
            >
              {/* Modal Card */}
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="
                  relative w-full max-w-md rounded-[24px] p-8
                  bg-[#092317]
                  border border-[#DAF966]/20
                  shadow-[0_32px_80px_rgba(218,249,102,0.1)]
                "
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#DAF966]/50 to-transparent rounded-full" />

                {/* Corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#DAF966]/5 blur-2xl" />

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#DAF966]/10 border border-[#DAF966]/20">
                    <MessageSquare className="h-5 w-5 text-[#DAF966]" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-[14px]
                      bg-[#1B6543]/20 border border-[#1B6543]/30
                      hover:bg-[#DAF966]/20 hover:border-[#DAF966]/50
                      transition-colors
                    "
                  >
                    <X className="h-5 w-5 text-[#DAF966]" />
                  </motion.button>
                </div>

                {/* Title */}
                <h2 className="mb-2 font-['Anton'] text-2xl uppercase tracking-wide text-[#FDFEFB]">
                  Let&apos;s get in{" "}
                  <span className="text-[#DAF966]">touch?</span>
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-[#B8CFC5]">
                  Our expert will get in touch to help you with your query.
                </p>

                {/* Inputs */}
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    maxLength={10}
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClass}
                  />

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option className="bg-[#006543]" value="">Select your city</option>
                    <option className="bg-[#006543]" value="noida">Noida</option>
                    <option className="bg-[#006543]" value="gurugram">Gurugram</option>
                    <option className="bg-[#006543]" value="delhi">Delhi - NCR</option>
                  </select>

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className={inputClass}
                  />
                </div>

                {/* CTA */}
                <div className="flex gap-3 mt-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    className="
                      flex-1 rounded-[12px] py-3
                      font-['Anton'] text-sm uppercase tracking-wider
                      bg-[#DAF966] text-[#092317]
                      hover:bg-[#c8e84a] transition-colors
                    "
                  >
                    Request Help
                  </motion.button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      rounded-[12px] px-5 py-3 text-sm font-['Anton'] tracking-wide uppercase
                      border border-[#1B6543] bg-transparent
                      text-[#DAF966] hover:bg-[#1B6543]/30 transition-colors
                    "
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export default HelpModel;