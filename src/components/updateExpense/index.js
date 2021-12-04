import React,{useState, useEffect} from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

// redux
import { useSelector } from 'react-redux'

import { Container, Grid } from '@mui/material'

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextfieldWrapper from '../FormikForm/FormikWrapper/Input'
import SelectfieldWrapper from '../FormikForm/FormikWrapper/Select'
import ButtonWrapper from '../FormikForm/FormikWrapper/Button'
import NavBar from '../NavBar'

import * as services from '../../services/ExpenseServices'

const initialValues={
    title: "",
    amount: "",
    category: ""
}

const validationSchema = Yup.object({
    title: Yup.string().required('Please Enter Title'),
    amount: Yup.number().typeError('Sholud be a Number').required('Please Enter Amount Spend'),
    category: Yup.string().required('Please Select')
})

export const categories = [
    {
      id: 1,
      key: "Education",
      value: 'education',
      icon: require("../../assets/images/education.png"),
      color: "#A95EC2",
    },
    {
      id: 2,
      key: "Healthcare",
      value: "healthcare",
      icon: require("../../assets/images/healthcare.png"),
      color: "#FF768A",
    },
    {
      id: 3,
      key: "Shopping",
      value: "shopping",
      icon: require("../../assets/images/shopping.png"),
      color: "#EC60AB",
    },
    {
      id: 4,
      key: "Food",
      value: "food",
      icon: require("../../assets/images/food.png"),
      color: "#FF9E6D",
    },
    {
      id: 5,
      key: "Other",
      value: "other",
      icon: require("../../assets/images/entertainment.png"),
      color: "#FFCB5E",
    },
];


const UpdateExpense = () => {
    const [updateList, setUpdateList] = useState(null)
    const {updateExpense} = useSelector(state => state.expens)
    useEffect(()=>{
        setUpdateList(updateExpense)
        // eslint-disable-next-line
    }, [])

    const update = async (values) => {
        await services.updateExpense(values)
    }
    const onSubmit = (values, {resetForm}) => {
        setUpdateList(values)
        update(values)
        toast.success('Expenses Updated...!', {
            position: 'top-right',
            autoClose: 1500,
            newestOnTop: true,
            hideProgressBar: false,
        });
        resetForm()
    }
    return (
        <>
        <NavBar />
        <div className='form-expense'>
            <ToastContainer />
            <div className='form-heading'>
                <h2 className='h2'>Update Expense</h2>
            </div> 
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth='md'>
                            <Formik 
                                initialValues={updateList || initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                                enableReinitialize
                            >
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} >
                                                    <TextfieldWrapper name='title' label='Title' />
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <TextfieldWrapper name='amount' label='Amount'/>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <SelectfieldWrapper name='category' label='Category' options={categories}/>                                    
                                                </Grid> 
                                                <Grid item xs={12} >
                                                    <ButtonWrapper>
                                                        Update
                                                    </ButtonWrapper>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                    </Container>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default UpdateExpense

