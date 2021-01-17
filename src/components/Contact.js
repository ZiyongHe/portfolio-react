import React from 'react'
import Header from './Header'

function Contact() {
  return (
    <div className="container">
      <Header />
      <div className="card-body">
        <form action="http://formspree.io/ziyonghe94@gmail.com" method="post">
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput2">Email</label>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              type="submit"
              name="Send"
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
        </form>
        <a
          href="contact"
          className="btn btn-primary"
          // action="mailto:ziyonghe94@gmail.com"
        >
          Submit
        </a>
      </div>
    </div>
  )
}

export default Contact
