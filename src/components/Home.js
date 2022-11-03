import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap'
import bootstrap from 'bootstrap';
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom' 


function Home(){
    let navigate =useNavigate();

    const handleEdit= (id,name,email,address,department,ctc) =>{
        localStorage.setItem('Empid',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Address',address);
        localStorage.setItem('Dept',department);
        localStorage.setItem('Ctc',ctc);
        navigate('/edit')
    }

    const handleDelete= (empId) =>{
        var index = Employees.map(function(e){
            return e.empId
        }).indexOf(empId);

        Employees.splice(index,1);
        navigate('/');
    }

    return(
        <Fragment>
            <div style={{margin:'10rem'}}>
                <Table striped bordered hover size="sm" className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>CTC</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0?
                            Employees.map((item) =>{
                                return(
                                    <tr key={item.EmpId}>
                                        <td>
                                            {item.EmpId}
                                        </td>
                                        <td>
                                            {item.EmpName}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            {item.Address}
                                        </td>
                                        <td>
                                            {item.Dept}
                                        </td>
                                        <td>
                                            {item.Ctc}
                                        </td>
                                        <td>
                                            <Button onClick={()=> handleEdit(item.EmpId,item.EmpName,item.Email,item.Address,item.Dept,item.Ctc)} variant="outline-light">Edit</Button>
                                            &nbsp;
                                            <Button onClick={()=> handleDelete (item.EmpId)} variant='light'>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                           <h1>No Record Avilable</h1> 
                        }
                    </tbody>
                </Table>
                <Link className='d-grid gap-2' to="/create">
                    <Button size='lg' variant='dark' >Create</Button>
                </Link>    
            </div>
        </Fragment>
        )    
}
export default Home