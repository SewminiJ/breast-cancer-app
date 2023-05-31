import Link from "next/link"
import Image from "next/image"
import { FormButton } from "@/components/FormButton"
import { GoogleButton } from "@/components/GoogleButton"
import Stack from "@mui/material/Stack"
import { InputField } from "@/components/InputField"
import { useForm } from "react-hook-form"
import firebaseApp, { db } from "@/config/firebase/firebaseConfig"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/router"
import { Checkbox } from "@mui/material"

type LoginFormInputs = {
    email: string;
    password: string;
};

export const SignUpModule = () => {

    const { handleSubmit, control } = useForm<LoginFormInputs>();
    const firebaseAuthentication = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    const router = useRouter();

    const googleSignIn = async () => {
        const { user } = await signInWithPopup(firebaseAuthentication, provider);
        const { refreshToken, providerData } = user;

        localStorage.setItem('user', JSON.stringify(providerData));
        localStorage.setItem('accessToken', JSON.stringify(refreshToken));

        router.push('/');

        console.log(999, router.pathname)
    };

    // const register = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.target);
    //     const email = formData.get("email")

    //     try {
    //         await db.collection("test-collection").add({
    //             email: email
    //         })
    //         event.target.reset();
    //     } catch (error) {
    //         console.log(999, error)
    //     }
    // }


    return (
        <>
            <div
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div className="flex items-center content-between m-auto w-full max-w-[1200px] p-4 pt-[80px]">
                <div>
                    <h1
                        className="text-6xl text-bold mb-16 leading-snug"
                    >
                        Sign In to<br />get your Nutrients<br /></h1>
                    <p className="text-xl text-medium">If you already have an account <br /> you can <Link href="/signIn" className="text-[#1E44FF] text-bold">Login here!</Link></p>
                </div>
                <div>
                    <Image
                        className="px-4"
                        src={"/images/woman4.png"}
                        alt={"google-button"}
                        width={600}
                        height={600}
                    />
                </div>
                <div>
                    <div
                        className="w-[400px] h-auto"
                    >
                        <form
                            className="mb-8"
                            onSubmit={() => { }}
                        >
                            <h1
                                className="text-5xl text-bold mb-6"
                            >Welcome Back</h1>
                            <Stack spacing={3} className="w-full">
                                <InputField
                                    control={control}
                                    name="email"
                                    fullWidth
                                    label="Email Adress"
                                />
                                <div className="flex align-center justify-between">
                                    <div className="mr-1">
                                        <InputField
                                            control={control}
                                            name="password"
                                            fullWidth
                                            label="Pasword"
                                        />
                                    </div>
                                    <div className="ml-1">
                                        <InputField
                                            control={control}
                                            name="conform_password"
                                            fullWidth
                                            label="Confirm Password"
                                        />
                                    </div>

                                </div>
                                <div className="flex align-center justify-between">
                                    <div className="mr-1">
                                        <InputField
                                            control={control}
                                            name="dob"
                                            fullWidth
                                            label="Date of Birth"
                                        />
                                    </div>
                                    <div className="ml-1">
                                        <InputField
                                            control={control}
                                            name="gender"
                                            fullWidth
                                            label="Gender"
                                        />
                                    </div>

                                </div>
                                <InputField
                                    control={control}
                                    name="medical_license_number"
                                    fullWidth
                                    label="Medical License Number"
                                />
                                <InputField
                                    control={control}
                                    name="contact"
                                    fullWidth
                                    label="Contact Number"
                                />
                                <InputField
                                    control={control}
                                    name="specialization"
                                    fullWidth
                                    label="Specialization"
                                />
                            </Stack>
                            <div className="flex items-center">
                                <Checkbox defaultChecked />
                                <p
                                    className="text-[#2C2C2C] text-xs text-bold my-4"
                                >Agree with the Terms and Conditions</p>
                            </div>
                            <FormButton variant={"contained"} buttonType={"Register"} />
                        </form>
                        <div
                            className="flex items-center justify-center flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <hr />
                                <p
                                    className="text-[#2C2C2C] text-xs text-bold mb-4"
                                >Or continue with</p>
                                <hr />
                            </div>
                            <div onClick={googleSignIn} className="	cursor-pointer">
                                <GoogleButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}