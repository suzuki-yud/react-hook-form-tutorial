import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  examplePattern: string;
  exampleRequired: string;
};

export const Example2: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitted, errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '50px' }}>
      <input
        defaultValue="test"
        {...register('example')}
        style={{ margin: '10px' }}
      />
      <div>
        <input
          {...register('examplePattern', {
            minLength: 8,
            maxLength: 16,
            pattern: /[a-zA-Z0-9.?/-]/,
          })}
          style={{ margin: '10px' }}
        />
        {errors.examplePattern && (
          <span style={{ color: 'red' }}>invalid value</span>
        )}
      </div>
      <div>
        <input
          {...register('exampleRequired', { required: true })}
          style={{ margin: '10px' }}
        />
        {errors.exampleRequired && (
          <span style={{ color: 'red' }}>This field is required</span>
        )}
      </div>
      <input type="submit" style={{ margin: '10px' }} />
      {isSubmitted && (
        <span style={{ color: 'blue', marginLeft: '10px' }}>
          submitted value at least once
        </span>
      )}
    </form>
  );
};
