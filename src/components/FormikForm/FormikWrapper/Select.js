import React from 'react'

import { TextField, MenuItem } from '@mui/material'

import { useField, useFormikContext } from 'formik'

export default function SelectfieldWrapper({name, options,...otherProps}) {
    const {setFieldValue} = useFormikContext();
    
    // console.log(" useField(name) ", useField(name))
    const [field, mata] = useField(name)

    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(name, value)
    }

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
    }

    if(mata && mata.touched && mata.error){
        configSelect.error = true;
        configSelect.helperText = mata.error;
    }
    // console.log(options)

    return (
        <TextField {...configSelect}>
            {
                options.map((option)=> {
                    // console.log(option)
                    return (
                        <MenuItem key={option.id} value={JSON.stringify(option)} style={{borderRight: `5px solid ${option.color}`,display: "flex", justifyContent: 'space-between'}}>
                            {option.key}
                            <img src={option.icon.default} alt={option.value} style={{height: 30, width: 30}} />
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}
