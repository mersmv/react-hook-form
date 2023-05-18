import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/forms';

const Form = () => {
	//esto es un destructuring dentro de un destructuring:
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm(); //{mode:} dentro de esto
	console.log(errors);
	return (
		<form action='' onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='nombre'>
				Name
				<input
					type='text'
					name='name'
					id='nombre'
					{...register('name', {
						required: FORM_VALIDATIONS['name'].require,
						//requiere indica que es obligatorio
						pattern: {
							value: FORM_VALIDATIONS['name'].pattern,
							message: FORM_VALIDATIONS['name'].message
						}
					})}
				/>
			</label>
			<span>{errors?.name?.message}</span>
			<label htmlFor='email'>
				Email
				<input
					type='text'
					name='mail'
					id='email'
					{...register('name', {
						required: FORM_VALIDATIONS['name'].require,
						//requiere indica que es obligatorio
						pattern: {
							value: FORM_VALIDATIONS['name'].pattern,
							message: FORM_VALIDATIONS['name'].message
						}
					})}
				/>
			</label>
			<span>{errors?.name?.message}</span>
			<input type='submit' />
		</form>
	);
};

const onSubmit = (data, e) => {
	console.log(data);
	console.log(e);
};

export default Form;
