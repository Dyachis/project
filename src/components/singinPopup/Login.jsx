import { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import Button from '../../blocs/style/Button'
import { useAuth } from '../../context/AuthContext'
import CustomTextInput from '../formik/CustomTextInput'

export default function RFormik({ setPopup, history }) {
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Email is  required!'),
        password: Yup.string().required('Password is  required!'),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          setLoading(true)
          setError(false)
          await login(values.email, values.password)
          setPopup()
          history.push('/home')
        } catch {
          setError(true)
        } finally {
          setLoading(false)
        }
        resetForm()
      }}
    >
      {(props) => (
        <Form>
          <CustomTextInput label='Email' name='email' type='text' placeholder='Email' autocomplete='off'/>
          <CustomTextInput label='Password' name='password' type='password' placeholder='Password' />
          {error && <h4>'Incorrect login or password!'</h4>}
          <div className='btns'>
            <Button
              onClick={() => {
                setPopup()
                history.push('/home')
              }}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={loading} primary>
              Log in
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
