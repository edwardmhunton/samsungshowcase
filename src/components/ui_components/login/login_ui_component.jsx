import React from 'react';

const LoginUIComponent = (props) => (


                <div className="component login mx-auto">
                    Login <br/>
                  <form onSubmit={props.onSubmit}   >

                    <p>Enter your details</p>
                    <input type='text'/>
                    <input type='submit' />

                    </form>


              </div>



)


export default LoginUIComponent;
