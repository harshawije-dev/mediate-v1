import RegistrationForm from "@/components/RegistrationForm";
import React from "react";

async function RegisterPage() {
  return (
    <div className="flex flex-col gap-2 px-6 py-2 w-full min-h-screen">
      <section className="flex flex-1 justify-center items-center">
        <RegistrationForm />
      </section>
    </div>
  );
}

export default RegisterPage;
