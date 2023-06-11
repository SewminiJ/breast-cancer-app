import { FormControl, InputLabel, Select, MenuItem, InputProps } from "@mui/material"
import { platform } from "os";
import { Control, Controller } from "react-hook-form";

interface DropdownFieldProps{
    label?: string;
    name: string;
    control: Control<any>;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    startAdornment?: InputProps['startAdornment'];
    type?: InputProps['type'];
    options: string[];
    placeholder?: string;
}
export const DropdownField = ({label, name, control, required, disabled, fullWidth, startAdornment, type, placeholder, options}: DropdownFieldProps) => {
    return(
        <FormControl fullWidth size="small">
            <Controller 
                control={control}
                name={name}
                render={({ field }) => (
                    <Select 
                        className="material-select"
                        label={label}
                        required={required}
                        inputProps={{
                            startAdornment
                        }}
                        placeholder={placeholder}
                        fullWidth={fullWidth}
                        variant="outlined"
                        disabled={disabled}
                        type={type}
                        {...field}
                    />
                )}
            />
        </FormControl>
    )
}