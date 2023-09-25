import React, { useState } from 'react'
import { css } from '@styled-system/css'
import { UseFormProps, useForm } from "react-hook-form";

export interface BasicFormProps extends UseFormProps {
}

type FormValues = {
  firstName: string;
  lastName: string;
}

export const BasicForm: React.FC<BasicFormProps> = () => {
  const [formValues, setFormValues] = useState();
  const [errorValues, setErrorValues] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm<FormValues>({
      // Default values below:
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      defaultValues: {},
      resolver: undefined,
      context: undefined,
      criteriaMode: "firstError",
      shouldFocusError: true,
      shouldUnregister: false,
      shouldUseNativeValidation: false,
      delayError: undefined
    });

  const onSubmit = (data: any) => {
    console.log(data)
    setFormValues(data)
  };

  const onError = (data: any) => {
    console.log(data)
    setErrorValues(data)
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={css({
          fontSize: '4xl',
          display: 'flex',
          flexDirection: 'column',
          '& > input': {
            mb: '12',
            border: '1px solid grey',
          }
        })}
      >
        <label htmlFor="firstName">First Name</label>
        <input 
          {...register(
            'firstName',
            { required: 'First Name is required' }
          )}
        />
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName')} />
        <input
          className={css({
            bg: 'blue.500'
          })}
          type="submit"
          value="Submit"
        />
      </form>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  )
}