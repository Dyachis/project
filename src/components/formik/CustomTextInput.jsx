import { useField } from 'formik'

export default function CustomTextInput({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type='text' {...field} {...props} />
      {meta.touched && meta.error ? <h4>{meta.error}</h4> : null}
    </>
  )
}