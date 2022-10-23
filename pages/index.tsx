import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  text: string;
};

export default function Index() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data.text);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '50px' }}>
      <input {...register('text')} style={{ margin: '20px' }} />
      <input type="submit" />
    </form>
  );
}
