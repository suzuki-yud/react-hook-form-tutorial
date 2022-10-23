import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  text: string;
  example: string;
  examplePattern: string;
  exampleRequired: string;
};

export default function Index() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    resetField,
    watch,
    formState: { isSubmitted, errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch('example'));

  const changeTextValue = (value: string) => {
    const currentValue = getValues('text');
    setValue('text', currentValue === '' ? value : `${currentValue},${value}`);
  };

  const resetTextValue = () => {
    resetField('text', { defaultValue: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '50px' }}>
        <input {...register('text')} style={{ margin: '20px' }} />
        <input type="submit" />
        <div>
          {['orange', 'grape', 'banana'].map((value) => {
            return (
              <button
                style={{ margin: '10px' }}
                key={value}
                onClick={() => changeTextValue(value)}
              >
                {value}
              </button>
            );
          })}
          <button
            onClick={resetTextValue}
            style={{ margin: '10px', background: 'gray', color: 'white' }}
          >
            クリア
          </button>
        </div>
      </form>
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
    </>
  );
}
