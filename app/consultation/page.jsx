"use client";
import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const Consultation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone?.value || "",
      message: e.target.message.value,
      subject: "Consultation Request",
      isConsultation: true,
      preferredDate: e.target.date.value,
      preferredTime: e.target.time.value,
      saunaType: e.target.saunaType.value,
      budgetRange: e.target.budget.value,
      contactMethod: e.target.contactMethod.value,
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
        toast.success("Consultation request sent successfully!", {
          duration: 2700,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(
          "Error sending consultation request. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending consultation request:", error);
      toast.error(
        "Error sending consultation request. Please try again later."
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-gray-800">
                Book Your Appointment
              </h1>
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-black flex items-center border-[1px] border-black rounded-lg p-1"
              >
                Home
              </Link>
            </div>
            <p className="text-gray-500 mt-4">
              Ready to explore your perfect sauna? Fill out the form below and
              we'll schedule a personalized consultation to discuss your needs
              in our showroom. Our expert team will help you find the ideal
              sauna solution for your space and requirements.
            </p>
          </div>

          {loading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
          )}

          <ConsultationForm onSubmit={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
