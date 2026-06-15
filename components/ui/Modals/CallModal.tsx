"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import PrimaryButton from "@/components/ui/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CallModal({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    solution: "",
    city: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");

      if (onlyDigits.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: onlyDigits,
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
      toast.error("Please enter your full name");
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

    if (!formData.solution) {
      toast.error("Please select a solution");
      return;
    }

    if (formData.city.trim().length <= 1) {
      toast.error("Please select a city");
      return;
    }

    toast.success(
      "Thank you for contacting us! We will get back to you soon."
    );

    setFormData({
      name: "",
      mobile: "",
      solution: "",
      city: "",
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
              className="
                fixed inset-0 z-[100]
                flex items-center justify-center
                p-4 overflow-y-auto
              "
              onClick={onClose}
            >
              {/* Modal Card */}
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="
                  relative w-full max-w-lg rounded-[24px] p-8
                  bg-[#092317]
                  border border-[#DAF966]/20
                  shadow-[0_32px_80px_rgba(218,249,102,0.1)]
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#DAF966]/10 border border-[#DAF966]/20">
                    <Phone className="h-5 text-[#DAF966]" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="
                      mb-2 flex h-10 w-10 items-center justify-center
                      rounded-[14px]
                      bg-[#1B6543]/20
                      border border-[#1B6543]/30
                      hover:bg-[#DAF966]/20 hover:border-[#DAF966]/50
                      transition-colors
                    "
                  >
                    <X className="h-5 text-[#DAF966]" />
                  </motion.button>
                </div>

                {/* Content */}
                <h2 className="mb-3 text-2xl font-['Anton'] uppercase tracking-wide text-[#FDFEFB]">
                  Connect With Our <span className="text-[#DAF966]">Advisor</span>
                </h2>

                <p className="mb-6 text-sm font-[var(--font-body)] leading-relaxed text-[#B8CFC5]">
                  Our expert professionals are available from{" "}
                  <span className="text-[#DAF966] font-medium">Monday to Saturday</span>{" "}
                  between{" "}
                  <span className="text-[#DAF966] font-medium">10 AM and 7 PM</span>.
                </p>

                {/* Form */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-[#B8CFC5] font-['Anton'] text-sm tracking-widest uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-[12px] px-4 py-3 border border-[#1B6543] bg-[#006543]/20 text-[#FDFEFB] focus:outline-none focus:ring-2 focus:ring-[#DAF966] focus:border-transparent transition-all placeholder:text-[#1B6543]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="mobile" className="text-[#B8CFC5] font-['Anton'] text-sm tracking-widest uppercase">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      required suppressHydrationWarning
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter 10 digit number"
                      maxLength={10}
                      className="w-full rounded-[12px] px-4 py-3 border border-[#1B6543] bg-[#006543]/20 text-[#FDFEFB] focus:outline-none focus:ring-2 focus:ring-[#DAF966] focus:border-transparent transition-all placeholder:text-[#1B6543]"
                    />
                  </div>
                  <div className="flex gap-4 grid grid-cols-2">
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="solution" className="text-[#B8CFC5] font-['Anton'] text-sm tracking-widest uppercase">
                        Looking For
                      </label>
                      <select
                        id="solution"
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        className="w-full rounded-[12px] px-4 py-3 border border-[#1B6543] bg-[#006543]/20 text-[#FDFEFB] focus:outline-none focus:ring-2 focus:ring-[#DAF966] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="" className="bg-[#092317] text-[#FDFEFB]">Select Solution</option>
                        <option value="All Solutions" className="bg-[#092317] text-[#FDFEFB]">All Solutions</option>
                        <option value="Virtual Office" className="bg-[#092317] text-[#FDFEFB]">Virtual Office</option>
                        <option value="Business Plan" className="bg-[#092317] text-[#FDFEFB]">Co-working space</option>

                      </select>
                    </div>


                    {/* select the city  noida,delhi ,gurugram*/}

                    <div className="flex flex-col gap-1">
                      <label htmlFor="city" className="text-[#B8CFC5] font-['Anton'] text-sm tracking-widest uppercase">
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-[12px] px-4 py-3 border border-[#1B6543] bg-[#006543]/20 text-[#FDFEFB] focus:outline-none focus:ring-2 focus:ring-[#DAF966] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="" className="bg-[#092317] text-[#FDFEFB]">Select City</option>
                        <option value="noida" className="bg-[#092317] text-[#FDFEFB]">Noida</option>
                        <option value="gurugram" className="bg-[#092317] text-[#FDFEFB]">Gurugram</option>
                        <option value="delhi" className="bg-[#092317] text-[#FDFEFB]">Delhi</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <div className="flex gap-4 items-center">
                  <div className="flex-1">
                    <PrimaryButton onClick={handleSubmit} className="w-full">
                      Request Call
                    </PrimaryButton>
                  </div>
                  <button
                    onClick={onClose}
                    className="
                      rounded-full px-6 py-[14px] text-sm font-['Anton'] tracking-wide uppercase
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