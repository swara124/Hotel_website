import React, {useState} from 'react'

function Contact() {
      const [forms, setForms] = useState({
    name: "",
    email: "",
    mob: "",
    msg: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({ ...forms, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErros = {};
    if (!forms.name.trim()) {
      newErros.name = "Name is required";
    }
    if (!forms.email) {
      newErros.email = "Email is required";
    }
    if (!forms.mob) {
      newErros.mob = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(forms.mob)) {
      newErros.mob = "Enter a valid 10-digit number";
    }
    if (!forms.msg) {
      newErros.msg = "Message is required";
    }
    return newErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate();
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      setErrors({});
      alert("Form Submitted");
    }
  };

  const handleClear = () => {
    setForms({ name: "", email: "", mob: "", msg: "" });
    setErrors({});
  };



    return (
        <div>
            <div className='container my-5'>
                <div className='row align-item-center'>
                    <div className='col-md-6 mb-4 mb-md-0'>
                        <img src='/images/contact.jpg' className='img-fluid mb-3'></img>
                    </div>
                    <div className='col-md-6'>
                        <h2 className='text-muted'>Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    id="name" 
                                    name='name'
                                    placeholder='Enter your name '
                                    autoComplete='off'
                                    value={forms.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">{errors.name}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    name='email'
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    id="email" 
                                    placeholder='Enter your email' 
                                    autoComplete="off"
                                    value={forms.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='mob' className='form-label'>Mobile Number</label>
                                <input 
                                    type='text' 
                                    className={`form-control ${errors.mob ? "is-invalid" : ""}`} 
                                    id='mob' 
                                    name='mob'
                                    placeholder='Enter valid mobile number'
                                    autoComplete='off'
                                    value={forms.mob}
                                    onChange={handleChange}
                                />
                                {errors.mob && (
                                    <div className="invalid-feedback">{errors.mob}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="msg" className="form-label">Message</label>
                                <textarea 
                                    className={`form-control ${errors.msg ? "is-invalid" : ""}`}
                                    id="msg" 
                                    name="msg"
                                    placeholder="Enter your message"
                                    value={forms.msg}
                                    onChange={handleChange}
                                />
                                {errors.msg && (
                                    <div className="invalid-feedback">{errors.msg}</div>
                                )}
                            </div>
                            <button type="submit" className="btn btn-primary">Send message</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>Clear</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
