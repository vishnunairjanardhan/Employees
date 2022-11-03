import React, {useState, useEffect} from "react";
import {Button,Form} from 'react-bootstrap';
import bootstrap from 'bootstrap';
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import { Link, useNavigate} from "react-router-dom";

function Edit(){
    const[id, setEmpid]=useState('');
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[address, setAddress]=useState('');
    const[department, setDept]=useState('');
    const[ctc, setCtc]=useState('');

    let history = useNavigate();
    
    var index =Employees.findIndex(item => item.EmpId == id)

    const handleSubmit=(e) => {
        e.preventDefault();

        let a= Employees[index];
        a.EmpId = id;
        a.EmpName= name;
        a.Email= email;
        a.Address= address;
        a.Dept= department;
        a.Ctc= ctc;

        history('/')
    }

    useEffect(()=>{
        setEmpid(localStorage.getItem('Empid'))
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setAddress(localStorage.getItem('Address'))
        setDept(localStorage.getItem('Dept'))
        setCtc(localStorage.getItem('Ctc'))
    },[])

    return(
        <div>
            <Form className="d-grid gap2" style={{margin:'20rem'}}>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Control type='text' placeholder="Enter Employee ID" value={id ?? ''} required onChange={(e)=> setEmpid(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type='text' placeholder="Enter Employee Name" value={name} required onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type='text' placeholder="Enter Email" value={email} required onChange={(e)=> setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Control as="textarea" rows={3} type='text' placeholder="Enter Address" value={address} required onChange={(e)=> setAddress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDept">
                <Form.Control type='text' placeholder="Enter Department Name" value={department} required onChange={(e)=> setDept(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Control type='number' placeholder="Enter CTC" value={ctc} required onChange={(e)=> setCtc(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant='dark' onClick={(e)=> handleSubmit(e)} type='submit'>"Update"</Button>
        </Form>
        </div>
    )

}

export default Edit;