import React, { Component } from 'react'

class Submit extends Component {
  constructor(props, ...rest) {
    super(props, ...rest)
    this.state = {}
  }
  // prettier-ignore
  render() {
        return (
            <div>
                <form name="contact" method="POST" netlify>                    
                    <label>Your Name: <input type="text" name="name" /></label>   
                    <label>Your Email: <input type="email" name="email" /></label>
                    <label>Message: <textarea name="message"></textarea></label>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default Submit
