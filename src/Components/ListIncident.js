import React from 'react'
import UserMenu from './UserMenu'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ListIncident = () => {
    const [data, setData] = useState([]);
    const [comm, setComm] = useState("");

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/incidents')
            .then((res) => {
                setData(res.data['hydra:member']);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            for (let i = 0; i < data.length; i++) {
                const incident = data[i];
                console.log('ID:', incident.id);
                console.log('Name:', incident.name);

                const commentaires = [];
                for (let j = 0; j < incident.commentaires.length; j++) {
                    const commentaireUrl = incident.commentaires[j];
                    const response = await axios.get("http://localhost:8000" + commentaireUrl);
                    const commentaireData = response.data;
                    commentaires.push(commentaireData);
                }

                console.log('Commentaires:', commentaires);

                // Mise à jour des données de commentaire pour chaque incident
                setData((prevData) => {
                    return prevData.map((item) => {
                        if (item.id === incident.id) {
                            return { ...item, commentaires: commentaires };
                        }
                        return item;
                    });
                });
            }
        };
        fetchData();
    }, [data]);
    function handelAddComment(id) {
        axios.post("http://localhost:8000/api/commentaires", {
            comment: comm,
            incident: "/api/incidents/" + id
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <UserMenu />
            <h2 className='text-center mt-3'>List Incident</h2>

            {data.map((incident) => (
                <div className='card mb-3 mt-3'>
                    <div className='row g-0' key={incident.id}>
                        <div className='card-body'>
                            <h5 className='card-title'>Post {incident.id}</h5>
                            <p className='card-text'>{incident.name}</p>
                            <p className='card-text'>
                                <small className='text-body-secondary'>Last updated 3 mins ago</small>
                            </p>
                        </div>
                        <form action='' className='d-flex'>
                            <ul>
                                <textarea name='comment' onChange={((e) => setComm(e.target.value))} className='comment' id='' cols='30' rows='10'></textarea>
                            </ul>
                            <button className='bntcom' onClick={() => handelAddComment(incident.id)} >Comment</button>
                        </form>

                        <div className=''>
                            <h5 className='mt-2 mx-3'>Comment:</h5>
                            <ul className='list-group list-group-flush'>
                                {incident.commentaires.map((commentaire, index) => (
                                    <li className='list-group-item' key={index}>
                                        connents numero {index} {commentaire.comment}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
};

export default ListIncident