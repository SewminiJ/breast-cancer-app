import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

interface DropdownFieldProps{
    label: string
}
  
export const DropdownField = ({label}: DropdownFieldProps) => {
    return(
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                {names.map((name) => {
                    return(
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}