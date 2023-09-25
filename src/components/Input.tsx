import { css } from '@styled-system/css';
import React from 'react'
import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

type InputProps<TFormValues extends FieldValues> = {
  label?: string;
  name: Path<TFormValues>;
  placeholder?: string;

  // rhf stuff
  registerReturnValue: UseFormRegisterReturn;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
}
export const Input = <TFormValues extends FieldValues>({
  label,
  name,
  placeholder,
  registerReturnValue,
  errors,
}: InputProps<TFormValues>
): JSX.Element => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...registerReturnValue}
        className={css({
          border: '1px solid grey',
          rounded: 'md'
        }) 
      }
      />
      {/* {errors[name]?.message && (<p>{errors.[name].message}</p>)} */}
    </React.Fragment>
  )
}