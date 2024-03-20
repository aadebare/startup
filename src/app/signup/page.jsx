
import React from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function SignUp(){
    return(
        <div className='w-1/2 m-auto'>
            <form>
                <ul>
                 <Input type="text" place="your username" userid="user"  />
                <Input type="email" place="your email address" userid="email" />
                <Input type="password" place="your password" userid="pwd" />
                </ul>    
                    <Button status='Sign Up'/>
            </form>
        </div>
    )
}