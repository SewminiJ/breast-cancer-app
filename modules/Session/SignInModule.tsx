import Link from "next/link"
import Image from "next/image"
import { LoadingButton } from '@mui/lab';
import { GoogleButton } from "@/components/GoogleButton"
import Stack from "@mui/material/Stack"
import { InputField } from "@/components/InputField"
import { useForm } from "react-hook-form";
import { useRouter } from "next/router"
import toast from "react-hot-toast"
import { InputAdornment } from "@mui/material";
import { AccountCircle, Key } from "@mui/icons-material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase/firebaseConfig";


interface LoginFormInputs {
    email: string;
    password: string;
};


export const SignInModule = () => {

    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, control } = useForm<LoginFormInputs>();
    const router = useRouter();

    const { login, currentUser } = useAuth()

    async function loginFunction(email: string, password: string) {
        if (!email || !password) {
            toast.error('Something went wrong. Please try again.');
            return
        }
        if (isLoggingIn) {
            try {
                setIsLoading(true);
                await login(email, password)
                setIsLoading(false);
                router.push('/');
            } catch (err) {
                setIsLoading(false);
                toast.error('Something went wrong. Please try again.');
            }
            return
        }
    }

    const onSubmit = (data: LoginFormInputs) => {
        loginFunction(data.email, data.password);
    };

    const googleSignIn = async () => {
        const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
        const { refreshToken, providerData } = user;
        router.push('/');
    };

    return (
        <>
            <div
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div className="flex-col lg:flex-row flex items-center content-center lg:content-between m-auto w-full h-screen max-w-[1200px] p-4">
                <Toaster />
                <div>

                    <h1
                        className="text-4xl lg:text-6xl text-bold mb-4 lg:mb-16 leading-snug mt-16 lg:mt-0"
                    >
                        Sign In to<br />get your Predictions<br /></h1>
                    <p className="text-md lg:text-xl text-medium">If you don't have an account <br /> you can <Link href="/signUp" className="text-[#1E44FF] text-bold">Register here!</Link></p>
                </div>
                <div>
                    <Image
                        className="px-4 hidden lg:block"
                        src={"/images/woman4.png"}
                        alt={"google-button"}
                        width={600}
                        height={600}
                    />
                </div >
                <div>
                    <div
                        className="mt-8 lg:mt-0 w-[400px] h-auto border-2 border-[#0ea5e9] rounded-md p-8 flex flex-col items-center justify-center"
                    >
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={3} className="w-full">
                                <InputField
                                    control={control}
                                    name="email"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    fullWidth
                                    label="Email"
                                />

                                <InputField
                                    control={control}
                                    name="password"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Key />
                                        </InputAdornment>
                                    }
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />
                            </Stack>

                            <br />

                            <LoadingButton
                                className="bg-sky-500 shadow font-medium rounded-md text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                loading={isLoading}
                            >
                                Login
                            </LoadingButton>
                        </form>
                        <div
                            className="flex items-center justify-center flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <hr />
                                <p
                                    className="text-[#2C2C2C] text-xs text-bold my-8"
                                >Or continue with</p>
                                <hr />
                            </div>
                            <div className="cursor-pointer" onClick={googleSignIn}>
                                <GoogleButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}