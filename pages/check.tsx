import { useAuth } from "@/context/AuthContext";
import { CheckMeModule } from "@/modules/checkMe/CheckMeModule";
import SignIn from "./signIn";

export default function CheckMe() {
    const { currentUser } = useAuth()
    return (
        <div>
            {!currentUser && <SignIn />}
            {currentUser && <CheckMeModule />}
        </div>
    )
}