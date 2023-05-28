import { CircularProgress } from "@mui/material"

export const LoadingScreen = () => {
    return(
        <div 
            className="
                h-screen
                w-screen
                flex
                justify-center
                items-center
                bg-white-100
            "
        >
            <CircularProgress  />
        </div>
    )
}