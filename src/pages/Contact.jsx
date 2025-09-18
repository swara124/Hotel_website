import React from 'react'

function Contact() {
    return (
        <div>
            <div className='container my-5'>
                <div className='row align-item-center'>
                    <div className='col-md-6 mb-4 mb-md-0'>
                        <img src='/images/contact.jpg' className='img-fluid mb-3'></img>
                    </div>
                    <div className='col-md-6'>
                        <h1>Cotact Form</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder='Enter your name '/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="password" className="form-control" id="email" placeholder='Enter your email' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="msg" className="form-label">Message</label>
                                <textarea className="form-control" id="msg" placeholder='Enter your message'/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
