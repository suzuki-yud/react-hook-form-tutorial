import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  text: string;
};

export const Example1: React.FC = () => {
  const { register, handleSubmit, setValue, getValues, resetField } =
    useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data.text);

  const changeTextValue = (value: string) => {
    const currentValue = getValues('text');
    setValue('text', currentValue === '' ? value : `${currentValue},${value}`);
  };

  const resetTextValue = () => {
    resetField('text', { defaultValue: '' });
  };

  return (
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
  );
};
