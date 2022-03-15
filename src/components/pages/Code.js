import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function CodePage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Verification Code</h2>
            <h5>Please Enter Your Code</h5>
            <form action="/reset">
                <p>
                    <label id="reset_pass_lbl">Code</label><br/>
                    <input type="code" name="code" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Verify Code</button>
                </p>
            
            <footer>
                {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
                <p><Link to="/">Back to Home</Link></p>
            </footer>
            </form>
        </div>
    )
}
