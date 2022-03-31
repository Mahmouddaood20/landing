
import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { data } from '../data'
import Locale from '../../../Locale';
import useCreateClient from '../../../hooks/Clients/useAddClient';

export default function AddClient(){

    const [showModal , setShowModal] = useState(false)
    const locale = useSelector(state => state.locale_reducer.locale)

    const [name , setName] = useState("")
    const [category , setCategory] = useState("")
    const [image , setImage] = useState({
        imgForSent: "",
        imgforDisplay:""
    })
    const inputRef = useRef(null)
    const formBody = new FormData()
    formBody.append("name" , name)
    formBody.append("image" , image.imgForSent)
    formBody.append("category" , category)
    // console.log(name , image , category)

    const [addClient , status] = useCreateClient(formBody)

    return (
        <>
            <button className='btn btn-clear btn-danger' onClick={() => setShowModal(!showModal)}>
                <span className='icx icx-plus'></span>
            </button>
            <Modal  show={showModal} onHide={() => setShowModal(!showModal)} centered>
                <Modal.Body>
                    <div className='row py-4 px-2'>
                        <h2 className="text-20 fw-bold text-center mb-4">Add New Client</h2>
                        <div className='col-12 mt-3'> 
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <h4 className="text-14 fw-bold">Name :</h4>
                                </div>
                                <div className="col-9">
                                    <input 
                                        className='form-control'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder={"Enter Name ..."}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <h4 className="text-14 fw-bold">Category :</h4>
                                </div>
                                <div className="col-9">
                                    <select 
                                        className='form-select'
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                        placeholder={"Select Category"}
                                    >
                                        {data.map(item => {
                                            return (
                                                <option value={item.id}>
                                                    {item.title}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4 mx-auto'>
                            <button className={`btn ${image.imgforDisplay === "" ? 'btn-primary' : ''}`} onClick={() => inputRef.current.click()}>
                                {
                                    image.imgforDisplay === "" ? 
                                        <span>Add Client Images</span> : 
                                        <img 
                                            src={image.imgforDisplay}
                                            width="120"
                                            height="120"
                                            alt="client imaging"
                                        />
                                }
                            </button>
                            <input 
                                className='d-none'
                                type="file"
                                ref={inputRef}
                                onChange={e => {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setImage({
                                            imgForSent: e.target.files[0],
                                            imgforDisplay: reader.result
                                        })
                                    }
                                    reader.readAsDataURL(e.target.files[0]);
                                }}
                            />
                        </div>
                        <div className="col-12 mt-5">
                            <div className='row align-items-center'>
                                <div className='col-md-6 col-12 mx-auto d-flex'>
                                    <button 
                                        className='btn btn-primary w-50 my-3 mx-2'
                                        onClick={addClient}
                                    >
                                        {Locale['Submit']}
                                    </button>
                                    <button 
                                        className='btn btn-danger w-50 my-3 mx-2'
                                        onClick={() => setShowModal(false)}
                                    >
                                        {Locale['Cancel']}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}