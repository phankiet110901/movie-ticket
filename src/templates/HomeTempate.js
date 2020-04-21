import React, {Fragment} from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import {Route} from 'react-router-dom';

const HomeLayout = (props) =>{
   return(
        <Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
   );
}

export const HomeTemplate = ({Component,...rest})=>{
    return (
        // truyen vao props de co the su dung props
        <Route {...rest } render= { (props)=>{
            return (
                <HomeLayout>
                    <Component {...props} />
                </HomeLayout>
            );
        } }  />
    );
}