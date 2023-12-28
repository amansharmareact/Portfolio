import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    query:""
  })
  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setFormdata((prevData) => ({ ...prevData, name: e.target.value }));
    }
    if (e.target.name === 'email') {
      setFormdata((prevData) => ({ ...prevData, email: e.target.value }));
    }
    if (e.target.name === 'query') {
      setFormdata((prevData) => ({ ...prevData, query: e.target.value }));
    }
  };
  const submitData = async (e) => {
    e.preventDefault();
    console.log(formdata, 'this is form ka data')
    const { name, email, query } = formdata; // Destructure the formdata object
  
    try {
      const response = await fetch('https://my-portfolio-41f94-default-rtdb.firebaseio.com/ContactData.json', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          query,
        }),
      });
  
      if (response.ok) {
        console.log('Data submitted successfully');
        // You can add further actions upon successful submission
      } else {
        console.error('Failed to submit data');
        // Handle the error case as needed
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle any unexpected errors during the fetch
    }
  };
  
  return (
    <section id="contact" className="section ">
    <div className="pt-40" style={{background:"#FFD1E3"}}>
      <div className="flex items-center flex-wrap justify-between px-16">
        <div className="lg:w-1/2 lg:text-start text-center wow fadeInUpjyu">
          <h2 className="text-5xl font-extrabold mb-5 text-left	">Let's get in touch</h2>
          <p className="text-xl mb-5 text-left	">
            I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.
          </p>
          <h3 className="text-2xl font-extrabold text-left	">Living In:</h3>
          <address className="text-xl text-left	">Noida, UP</address>
          <h3 className="text-2xl font-extrabold text-left	mt-5">Call:</h3>
          <p className="text-xl text-left	">+91-8077124346</p>
          <ul className="social-icons social-icons-lg justify-content-center lg:justify-content-start mt-5">
            <li className="social-icons-twitter"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li className="social-icons-instagram"><a href="http://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li className="social-icons-github"><a href="http://www.github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li className="social-icons-dribbble"><a href="http://www.dribbble.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
          </ul>
        </div>
        <div className="lg:w-1/2 lg:mt-0 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.3s"}}>
          <h2 className="text-5xl font-extrabold text-center lg:text-start mb-5">Estimate your Project?</h2>
          <form id="contact-form" className="form-border" method="post">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="form-label" for="name">What is Your Name:</label>
                <input id="name" onChange={handleChange} value={formdata.name} name="name" type="text" className="form-control py-2" required={true} placeholder='Enter your name'/>
              </div>
              <div>
                <label className="form-label" for="email">Your Email Address:</label>
                <input id="email" onChange={handleChange} value={formdata.email} name="email" placeholder='Enter your email' type="email" className="form-control py-2" required={true} />
              </div>
              <div>
                <label className="form-label" for="form-message">How can I Help you?</label>
                <textarea id="form-message" onChange={handleChange} value={formdata.query} name="query" placeholder='Enter your query' className="form-control py-2" rows="4" required={true}></textarea>
              </div>
              
              <div className="text-center lg:text-start">
              <button type="submit" onClick={submitData} className="button-31">Inquiry</button>

               
              </div>
              <div className="Toastify"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact