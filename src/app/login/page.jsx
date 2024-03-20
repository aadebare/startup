import React from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Login(){
    return (
        <section className='m-auto w-1/2'>
        <form>
        <ul>
            
            <Input type="text"  userid="user" place="username" />
            <Input type="password" userid="pwd" place="password" />
            
            </ul>
            <Button status='Log In'/>
    </form>
    </section>
    )
}               