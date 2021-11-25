import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import { Container, Grid } from '@mui/material'

import TextfieldWrapper from '../../components/FormikForm/FormikWrapper/Input'
import ButtonWrapper from '../../components/FormikForm/FormikWrapper/Button'
import NavBar from '../../components/NavBar'


import {registerUser} from '../../services/authService'

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
    username: '',
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    username: Yup.string().required('Username Required'),
    email: Yup.string().email('Please Enter Valid Email id').required('Email Required'),
    password: Yup.string().required('Password Required')
})

const toastObj = {
    position: 'top-right',
    autoClose: 1500,
    newestOnTop: true,
    hideProgressBar: false,
}

const RegistrationForm = () => {
    const history = useHistory();

    const onSubmit = async(values, {resetForm}) => {
        const {data, status} =  await registerUser(values)
        const type = typeof data
        status === 200 && type === 'string' && toast.error(data, toastObj)
        status === 201 && type === 'object' && toast.success('Account Added Succefully...!', toastObj)
        if(status === 201 && type === 'object'){
            setTimeout(()=>{
                history.push('/login')
            },1500)
        }
        resetForm()
    }
    
    return (
        <>
        <NavBar />
        <div className='form-expense'>
            <ToastContainer />
            <div className='form-heading'>
                <h2 className='h2'>Create Account</h2>
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
                                                    <TextfieldWrapper name='email' label='Email'/>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <TextfieldWrapper type='password' name='password' label='password'/>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <ButtonWrapper>
                                                        Sign Up
                                                    </ButtonWrapper>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        <p style={{marginTop: 25, textAlign: 'center', letterSpacing: 2}}>
                            Aleardy have account? 
                            <Link to='/login' style={{textDecoration: 'none', color: '#34465D'}}> Login</Link>
                        </p>
                    </Container>
                </Grid>
            </Grid>
        </div>
        </>
        )
}

export default RegistrationForm
