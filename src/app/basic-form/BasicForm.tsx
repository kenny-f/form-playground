import React, { useState } from 'react'
import { css } from '@styled-system/css'
import { FieldError, FieldErrors, SubmitErrorHandler, SubmitHandler, UseFormProps, useForm } from "react-hook-form";
import { Input } from '@/components/Input';

export interface BasicFormProps extends UseFormProps {
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
}

export const BasicForm: React.FC<BasicFormProps> = () => {
  const [formValues, setFormValues] = useState<FormValues>();
  const [errorValues, setErrorValues] = useState<FieldErrors<FormValues>>();

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<FormValues>({
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    setFormValues(data)
  };

  const onError: SubmitErrorHandler<FormValues> = (data) => {
    console.log(data)
    setErrorValues(data)
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={css({
          display: 'flex',
          flexDirection: 'column',
          '& > input': {
            mb: '12',
            border: '1px solid grey',
          }
        })}
      >
        <Input
          label="Email"
          name="email"
          registerReturnValue={register(
            'email',
            {
              required: 'Email is required'
            })}
        />
        <Input
          label="First Name"
          name="firstName"
          registerReturnValue={register(
            'firstName',
            {
              required: 'First Name is required'
            })}
        />
        <Input
          label="Last Name"
          name="lastName"
          registerReturnValue={register(
            'lastName',
            {
              required: 'Last Name is required'
            })}
        />
        <input
          className={css({
            bg: 'blue.500',
            rounded: 'md'
          })}
          type="submit"
          value="Submit"
        />
      </form>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  )
}