import React from 'react'
import GoogleButton from "../components/GoogleButton"
import "../css/styles.css"

const Welcome = () => {
    return (
        <section className="h100vh">
            <div className="flex col width-600">
                <div className="flex justify-center"> 
                    <h1>PAPERWORK</h1>  
                </div>
                <div> 
                    <h2>Get started absolutely free</h2> 
                </div>
                <div>
                    <p>The fastest and easiest way to manage your freelance agreements <br/> W know you'd rather not spend any time on it at all, but it is what it is.</p>  
                </div>  
                <div>
                    <GoogleButton backgroundColor="white" slug="/login">Sign in with Google</GoogleButton>
                </div>
            </div>
        </section>
    )
}

export default Welcome
