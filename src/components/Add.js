import React, {useState} from "react";
import {Button,Form} from 'react-bootstrap';
import bootstrap from 'bootstrap';
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import { Link, useNavigate} from "react-router-dom";

function Add(){
    const[id, setEmpid]=useState('');
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[address, setAddress]=useState('');
    const[department, setDept]=useState('');
    const[ctc, setCtc]=useState('');

    let navigate = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = id,
        b = name,
        c = email,
        d = address,
        f = department,
        g = ctc;

        Employees.push({EmpId: a,EmpName: b,Email: c,Address: d,Dept: f,Ctc: g});

        navigate("/")
    }
    return<div>
        <Form className="d-grid gap2" style={{margin:'20px'}}>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Control type='text' placeholder="Enter Employee ID" required onChange={(e)=> setEmpid(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type='text' placeholder="Enter Employee Name" required onChange={(e)=> setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type='text' placeholder="Enter Email" required onChange={(e)=> setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Control as="textarea" rows={3} type='text' placeholder="Enter Address" required onChange={(e)=> setAddress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDept">
                <Form.Control type='text' placeholder="Enter Department Name" required onChange={(e)=> setDept(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Control type='number' placeholder="Enter CTC" required onChange={(e)=> setCtc(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant='dark' onClick={(e)=> handleSubmit(e)} type='submit'>"Submit"</Button>
        </Form>
    </div>;
}

export default Add;