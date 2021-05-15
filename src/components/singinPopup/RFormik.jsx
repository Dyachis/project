import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import Button from '../../blocs/style/Button'
import { useAuth } from '../../context/AuthContext'
import addUserInfo from '../../firebase/functions/addUserInfo'
import CustomTextInput from '../formik/CustomTextInput'

export default function RFormik({ setPopup, history }) {
  const { singup } = useAuth()
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        lastname: '',
        info: "Hello, I'm new here!",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Email is  required!'),
        password: Yup.string().required('Password is  required!'),
        name: Yup.string().required('Name is  required!'),
        lastname: Yup.string().required('Lastname is  required!'),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          setLoading(true)
          setError(false)
          await addUserInfo(values, file)
          await singup(values.email, values.password)
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
          <CustomTextInput label='Email' name='email' type='email' placeholder='Email' autocomplete='off'/>
          <CustomTextInput label='Password' name='password' type='password' placeholder='Password' autocomplete='off'/>
          <CustomTextInput label='Name' name='name' type='text' placeholder='Name' autocomplete='off'/>
          <CustomTextInput label='Lastname' name='lastname' type='text' placeholder='Lastname' autocomplete='off'/>
          <CustomTextInput label='Information' name='info' type='text' placeholder='Information about yourself' autocomplete='off'/>
          {/* <input type='file' onChange={(e) => setFile(e.target.files[0])} /> */}
          <label htmlFor='file' >Images</label>
          <div className='filecont' style={{
            background: 'white',
            height: '65px',
            borderRadius: '5px',
            }}>
            <label style={{
              width: '300px',
              position:'absolute',
              color: '#0F4C81',
              fontSize: '20px',
              right: '290px',
              top: '595px'
              }}>
                Drag and Drop Or just Click
              </label>


            <input id='file' name='file' type='file' multiple='on' className='fileinp' style={{
                  height: '65px',
                  width: '400px',
                  margin: '0',
                  backgroundColor: 'gray',
                  opacity: '0',
                  cursor:'pointer'
            }}/>
          </div>
          {error && <h4>'Incorrect login or password!'</h4>}
          <p>
            Already have an account? <Link to='/home/login'>Sing in</Link>
          </p>
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
