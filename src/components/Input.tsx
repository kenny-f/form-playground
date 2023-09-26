import { ErrorMessage } from '@hookform/error-message';
import { css } from '@styled-system/css';
import React from 'react'
import { DeepMap, FieldError, FieldValues, Path, UseFormRegisterReturn } from 'react-hook-form';

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
    <div
      data-id="input-wrapper"
      className={css({
        display: 'flex',
        flexDirection: 'column'
      })}
    >
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...registerReturnValue}
        className={css({
          border: '1px solid grey',
          rounded: 'md',
          px: '4',
        }) 
      }
      />
      <ErrorMessage
        name={name as any}
        errors={errors}
        render={({message}) => (
          <p
            className={css({
              color: 'red.500',
              fontSize: 'xs'
            })}
          >
            {message}
          </p>
        )}
      />
      {/* {errors[name]?.message && (<p>{errors.[name].message}</p>)} */}
    </div>
  )
}