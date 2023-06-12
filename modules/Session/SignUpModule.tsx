import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase/firebaseConfig";
import { GoogleButton } from "@/components/GoogleButton";
import { InputField } from "@/components/InputField";
import { Stack } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { LoadingButton } from "@mui/lab";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  gender: string;
  mln: string;
  contact: string;
  spec: string;
};

export const SignUpModule = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    dob: Yup.string().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    mln: Yup.string().required('Medical License Number is required'),
    contact: Yup.string().required('Contact Number is required').max(10, "Contact must be 10 characters"),
    spec: Yup.string().required('Specialization is required'),
  });

  
  const { handleSubmit, control, formState: {errors} } = useForm<RegisterFormInputs>({
    resolver: yupResolver(validationSchema),
  });  

  const { signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  }

  const handleSignUp = async (data: RegisterFormInputs) => {
    const {
      email,
      password,
      confirmPassword,
      dob,
      gender,
      mln,
      contact,
      spec,
    } = data;

    if (!email || !password) {
      return;
    }

    try {
      setIsLoading(true);
      await createUserInFirestore(
        email,
        dob,
        gender,
        mln,
        contact,
        spec
      );
      await signup(email, password);

      setIsLoading(false);
      router.push("/signIn");
    } catch (error) {
      setIsLoading(false);
      console.error("Error signing up:", error);
    }
  };

  const onSubmit = (data: RegisterFormInputs) => {
    handleSignUp(data);
    
  };

  const createUserInFirestore = async (
    email: string,
    dob: string,
    gender: string,
    mln: string,
    contact: string,
    spec: string
  ) => {
    try {
      const userRef = doc(db, "users", email);
      const userData = {
        email,
        dob,
        gender,
        mln,
        contact,
        spec,
      };
      await setDoc(userRef, userData);
    } catch (error) {
      console.error("Error creating user in Firestore:", error);
    }
  };

  const googleSignIn = async () => {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
    router.push("/");
  };  

  return (
    <>
      <div className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-20" />
      <div className="flex flex-col lg:flex-row items-center content-between m-auto w-full max-w-[1200px] p-8">
        <div>
          <h1 className="text-4xl lg:text-6xl text-bold mb-4 lg:mb-16 leading-snug mt-16 lg:mt-0">
            Sign In to<br />get your Nutrients<br />
          </h1>
          <p className="text-md lg:text-xl text-medium">
            If you already have an account <br /> you can{" "}
            <Link href="/signIn" className="text-[#1E44FF] text-bold">
              Login here!
            </Link>
          </p>
        </div>
        <div>
          <Image
            className="px-4 hidden lg:block"
            src={"/images/woman4.png"}
            alt={"google-button"}
            width={600}
            height={600}
          />
        </div>
        <div>
          <div className="w-[400px] h-auto mt-8 lg:mt-0">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-xl lg:text-5xl text-bold mb-6 md:mt-12">Welcome Back</h1>
              <Stack spacing={3} className="w-full">
                <InputField
                  control={control}
                  name="email"
                  fullWidth
                  label="Email Address"
                  error={errors.email?.message}
                />
                <div className="flex align-center flex-col justify-between">
                  <div className="mb-4">
                    <InputField
                      control={control}
                      name="password"
                      fullWidth
                      label="Password"
                      error={errors.password?.message}
                    />
                  </div>
                  <div>
                    <InputField
                      control={control}
                      name="confirmPassword"
                      fullWidth
                      label="Confirm Password"
                      error={errors.confirmPassword?.message}
                    />
                  </div>
                </div>
                <div className="flex align-center justify-between">
                  <div className="mr-4">
                    <InputField
                      control={control}
                      name="dob"
                      fullWidth
                      label="Date of Birth"
                      error={errors.dob?.message}
                    />
                  </div>
                  <InputField
                    control={control}
                    name="gender"
                    fullWidth
                    label="Gender"
                    error={errors.gender?.message}
                  />
                </div>
                <InputField
                  control={control}
                  name="mln"
                  fullWidth
                  label="Medical License Number"
                  error={errors.mln?.message}
                />
                <InputField
                  control={control}
                  name="contact"
                  fullWidth
                  label="Contact Number"
                  error={errors.contact?.message}
                />
                <InputField
                  control={control}
                  name="spec"
                  fullWidth
                  label="Specialization"
                  error={errors.spec?.message}
                />
              </Stack>
              <div className="flex items-center justify-normal w-full">
                <input onClick={handleCheck} className="checkbox mr-2" type="checkbox" name="agree" value="agree" />
                <p className="text-[#2C2C2C] text-xs text-bold my-2 w-full">
                  Agree with the Terms and Conditions
                </p>
              </div>
              {checked && <LoadingButton
                  className="bg-sky-500 shadow font-medium rounded-md text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isLoading}
              >
                  Register
              </LoadingButton>}
            </form>
              <div className="flex items-center justify-center flex-col mt-8">
                <div className="flex items-center justify-between">
                  <hr />
                  <p className="text-[#2C2C2C] text-xs text-bold mb-4">
                    Or continue with
                  </p>
                  <hr />
                </div>
                <div onClick={googleSignIn} className="cursor-pointer">
                  <GoogleButton />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
