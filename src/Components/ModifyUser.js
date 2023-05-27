import React, { useEffect } from 'react'
import { ReactComponent as Registerr } from '../assets/register.svg';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ModifyUser = () => {
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('USER');
    const { id } = useParams();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:8000/api/users/${id}`);
            const user = response.data;
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setEmail(user.email);
            setRole(user.role);
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/users/${id}`, { firstname, lastname, email, role });
        // redirect to user list or show a success message
    };

    return (
        <>

            <section class="credit-card">
                <div class="container">

                    <div class="card-holder">
                        <div class="card-box bg-news">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="img-box">
                                        <Registerr height="310px" />
                                    </div>
                                </div>
                                <div class="col-lg-6">

                                    <form onSubmit={handleSubmit}>
                                        <div class="card-details">
                                            <h3 class="title">Modify User</h3>
                                            <div class="row">
                                                <div class="form-group col-sm-7 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-holder">First Name</label>
                                                        <i class="far fa-user"></i>
                                                        <input id="card-holder" type="text" class="form-control" placeholder="firstname" aria-label="firstname" aria-describedby="basic-addon1" value={firstname}
                                                        onChange={(event) => setFirstName(event.target.value)}></input>
                                                    </div>
                                                </div>

                                                <div class="form-group col-sm-8 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-number">Last Name</label>
                                                        <i class="far fa-credit-card"></i>
                                                        <input id="card-number" type="text" class="form-control" placeholder="lastname" aria-label="lastname" aria-describedby="basic-addon1"  value={lastname}
                                                        onChange={(event) => setLastName(event.target.value)}></input>
                                                    </div>
                                                </div>

                                                <div class="form-group col-sm-8 mt-3">
                                                    <div class="inner-addon right-addon">
                                                        <label for="card-number">Email</label>
                                                        <i class="far fa-credit-card"></i>
                                                        <input id="card-number" type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1" value={email}
                                                        onChange={(event) => setEmail(event.target.value)}></input>
                                                    </div>
                                                </div>
                                                <select class="form-select" aria-label="Default select example"  value={role}
                                                onChange={(event) => setRole(event.target.value)}>
                                                    <option selected>Open this select menu</option>
                                                    <option value="ADMIN">Admin</option>
                                                    <option value="USER">User</option>
                                                </select>
                                                <div class="form-group col-sm-12">
                                                    <button type="submit" class="btn btn-primary ">Proceed</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ModifyUser