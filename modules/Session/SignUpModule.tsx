import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase/firebaseConfig";

export const SignUpModule = () => {
    const { signup } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignUp = async () => {
        if (!email || !password) {
            return;
        }

        try {
            setIsLoading(true);
            await signup(email, password);
            await createUserInFirestore(email);
            setIsLoading(false);
            router.push("/dashboard");
        } catch (error) {
            setIsLoading(false);
            console.error("Error signing up:", error);
            // Handle error
        }
    };

    const createUserInFirestore = async (email) => {
        try {
            const userRef = doc(db, "users", email);
            const userData = {
                email: email,
                // Add additional user data if needed
            };
            await setDoc(userRef, userData);
        } catch (error) {
            console.error("Error creating user in Firestore:", error);
            // Handle error
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <div className="mt-40">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleSignUp} disabled={isLoading}>
                Sign Up
            </button>
            <p>
                Already have an account? <Link href="/login">Log in</Link>
            </p>
        </div>
    );
}