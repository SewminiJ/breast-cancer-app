import { Index } from '@/modules/home/Index'
import { useAuth } from '@/context/AuthContext';
import SignIn from './signIn';

export default function Home() {
    const { currentUser } = useAuth()

    return (
        <div>
            {!currentUser && <SignIn />}
            {currentUser && <Index />}
        </div>
    )
}