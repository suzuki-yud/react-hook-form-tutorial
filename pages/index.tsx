import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  text: string;
};

export default function Index() {
  const { register, handleSubmit, setValue, getValues } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data.text);

  const changeTextValue = (value: string) => {
    const currentValue = getValues('text');
    setValue('text', currentValue === '' ? value : `${currentValue},${value}`);
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
      </div>
    </form>
  );
}
