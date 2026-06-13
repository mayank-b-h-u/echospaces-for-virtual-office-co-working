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

function HelpModel({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");

      if (onlyDigits.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          mobile: onlyDigits,
        }));
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    if (!formData.location.trim()) {
      toast.error("Please enter your location");
      return;
    }

    toast.success(
      "Thank you for contacting us! We will get back to you soon."
    );

    setFormData({
      name: "",
      mobile: "",
      email: "",
      location: "",
      message: "",
    });

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
              onClick={onClose}
              className="fixed inset-0 bg-black/70 z-[99998]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="
                fixed inset-0 z-[99999]
                flex items-center justify-center
                p-4 overflow-y-auto
              "
              onClick={onClose}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="
                  relative w-full max-w-md rounded-[24px] p-8
                  bg-[#042C53]/90 border border-[#85B7EB]/20
                  backdrop-blur-xl
                  shadow-[0_32px_80px_rgba(2,12,28,0.7)]
                "
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#EF9F27]/50 to-transparent rounded-full" />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EF9F27]/15 border border-[#EF9F27]/25">
                    <MessageSquare className="h-5 text-[#EF9F27]" />
                  </div>

                  {/* Close */}
                  <button
                    onClick={onClose}
                    className="
                      mb-5 flex h-12 w-12 items-center justify-center
                      rounded-[14px]
                      bg-[#EF9F27]/15
                      border border-[#EF9F27]/25
                      hover:bg-[#EF9F27]/25
                      cursor-pointer
                    "
                  >
                    <X className="h-5 text-[#EF9F27]" />
                  </button>
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-bold text-[#E6F1FB]">
                  Let&apos;s get in touch?
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-[#85B7EB]">
                  Our expert will get in touch to help you with your query.
                </p>

                {/* Inputs */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mb-3 w-full rounded-[12px] px-4 py-3 text-sm bg-navy-800/5 border border-[#85B7EB]/20 text-[#E6F1FB] outline-none"
                />

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  className="mb-3 w-full rounded-[12px] px-4 py-3 text-sm bg-navy-800/5 border border-[#85B7EB]/20 text-[#E6F1FB] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mb-3 w-full rounded-[12px] px-4 py-3 text-sm bg-navy-800/5 border border-[#85B7EB]/20 text-[#E6F1FB] outline-none"
                />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="mb-3 w-full rounded-[12px] px-4 py-3 text-sm bg-navy-800/5 border border-[#85B7EB]/20 text-[#E6F1FB] outline-none"
                />

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="mt-3 w-full rounded-[12px] px-4 py-3 text-sm bg-navy-800/5 border border-[#85B7EB]/20 text-[#E6F1FB] outline-none"
                />

                {/* CTA */}
                <button
                  onClick={handleSubmit}
                  className="
                    mt-4 w-full rounded-[12px] py-3
                    font-semibold text-sm
                    bg-gradient-to-br from-[#EF9F27] to-[#C87D10]
                    text-[#1A0D00]
                  "
                >
                  Request Help
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export default HelpModel;