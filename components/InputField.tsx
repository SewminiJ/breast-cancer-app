import { Controller, Control } from 'react-hook-form';
import { InputProps, TextField } from '@mui/material';

interface InputFieldProps {
    label?: string;
    name: string;
    control?: Control<any>;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    startAdornment?: InputProps['startAdornment'];
    type?: InputProps['type'];
}

export function InputField({
    label,
    name,
    control,
    required,
    disabled,
    fullWidth,
    startAdornment,
    type,
}: InputFieldProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    required={required}
                    InputProps={{
                        startAdornment,
                    }}
                    fullWidth={fullWidth}
                    label={label}
                    variant="outlined"
                    disabled={disabled}
                    type={type}
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...field}
                />
            )}
        />
    );
}
