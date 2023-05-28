import { Index } from '@/modules/home/Index'
import { LoadingScreen } from '@/modules/shared/LoadingScreen'
import { useState } from 'react';

export default function Home(){
    const[isLoading, setIsLoading] = useState(false);


    if(isLoading){
        return <LoadingScreen />
    }
        return (
        <div>  
            <Index />
        </div>
    )
}