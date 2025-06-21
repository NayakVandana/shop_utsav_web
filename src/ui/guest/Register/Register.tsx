"use client";
import { useApiLoadingStore } from "@/components/ApiLoading/ApiLoadingStore";
import AuthContainer from "@/components/AuthContainer";
import FormButton from "@/components/Form/FormButton";
import FormInput from "@/components/Form/FormInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "../Login/authStore";

export default function Register() {
  const router = useRouter();
  const login = useAuthStore((state: any) => state.login);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const isValid = () => {
    let error = false;
    if (!formData.name) {
      errors.name = "Enter Your name";
      error = true;
    } else if (formData.name.length < 5) {
      errors.name = "Name must be atleast 5 characters";
      error = true;
    }
    if (!formData.email) {
      errors.email = "Please enter your email address";
      error = true;
    }
    if (!formData.password) {
      errors.password = "Enter password";
      error = true;
    }
    setErrors({ ...errors });
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) {
      const { showLoader, hideLoader } = useApiLoadingStore.getState();
      showLoader();
      const response = await signIn("custom-signup", {
        ...formData,
        redirect: false,
      }).then(({ ok, error }: any) => {
        hideLoader();
        if (ok) {
          login({
            success: () => {
              router.push("/products");
            },
          });
        }
      });
    }
  };

  return (
    <AuthContainer
      title={"Create your account"}
      subtitle={"Create a account to start your journey with us"}
    >
      <form className="space-y-6" action="#" onSubmit={handleSubmit}>
        <FormInput
          id={"name"}
          name={"name"}
          title="Your Full Name"
          placeholder={"Enter Your Name"}
          type="text"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormInput
          id={"email"}
          name={"email"}
          title="User Email"
          placeholder={"User Email"}
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          id={"password"}
          name={"password"}
          title="Password"
          placeholder={"Enter Password"}
          type="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
        />
        <FormButton type="submit" className="btn btn-primary btn-block" title="Register" />
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have account? <Link href="/login" className="link link-hover text-primary-400">Login</Link>
      </p>
    </AuthContainer>
  );
}