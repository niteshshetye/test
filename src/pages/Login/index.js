import React,{useContext} from 'react'
import {Formik, Form} from 'formik'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'

import { Container, Grid } from '@mui/material'

import TextfieldWrapper from '../../components/FormikForm/FormikWrapper/Input'
import ButtonWrapper from '../../components/FormikForm/FormikWrapper/Button'
import NavBar from '../../components/NavBar'

import {loginUser} from '../../services/authService'

import LoginContext from '../../context/LoginContext'


// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
    username: '',
    password: ''
}

const validationSchema = Yup.object({
    username: Yup.string().required('Username Required'),
    password: Yup.string().required('Password Required')
})

const toastObj = {
    position: 'top-right',
    autoClose: 2500,
    newestOnTop: true,
    hideProgressBar: false,
}

const LoginForm = () => {
    const {handleLoginSuccess} = useContext(LoginContext)
    
    const onSubmit = async(values, {resetForm}) => {
        const {data, status} = await loginUser(values)
        const type = typeof data
        status === 200 && type === 'string' && toast.error(data, toastObj)
        if(status === 200 && type === 'object') {
            handleLoginSuccess(data)
        }
        // resetForm()
    }
    
    return (
        <>
        <NavBar />
        <div className='form-expense'>
            <ToastContainer />
            <div className='form-heading'>
                <h2 className='h2'>Login Page</h2>
            </div> 
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth='md'>
                            <Formik 
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} >
                                                    <TextfieldWrapper name='username' label='User Name' />
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <TextfieldWrapper type='password' name='password' label='password'/>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <ButtonWrapper>
                                                        Login
                                                    </ButtonWrapper>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        <p style={{marginTop: 25, textAlign: 'center', letterSpacing: 2}}>
                            Don't have account? 
                            <Link to='/register' style={{textDecoration: 'none', color: '#34465D'}}> Signup</Link>
                        </p>
                    </Container>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default LoginForm
