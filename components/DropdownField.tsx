import { FormControl, InputLabel, Select, MenuItem, InputProps } from "@mui/material"
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
}
export const DropdownField = ({label, name, control, required, disabled, fullWidth, startAdornment, type, options}: DropdownFieldProps) => {
    return(
        // <FormControl fullWidth>
        //     <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        //     <Select
        //         labelId="demo-simple-select-label"
        //         id="demo-simple-select"
        //         // value={age}
        //         label=""
        //         // onChange={handleChange}
        //     >
        //         {names.map((name) => {
        //             return(
        //                 <MenuItem key={name} value={name}>{name}</MenuItem>
        //             )
        //         })}
        //     </Select>
        // </FormControl>
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