import { Button } from "@mui/material"

interface FormButtonProps{
    variant: any,
    buttonType: string
}

export const FormButton = ({variant, buttonType}: FormButtonProps) => {
    return(
        <Button 
            style={{fontSize: ''}}
            className="w-full h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] rounded-md capitalize py-3 px-6 font-normal text-white text-md" 
            variant={variant}
        >
            {buttonType}
        </Button>
    )
}
