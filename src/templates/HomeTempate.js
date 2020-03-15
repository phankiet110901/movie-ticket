import React, {Fragment} from 'react';
import Header from './../components/header';
import {Route} from 'react-router-dom';

const HomeLayout = (props) =>{
   return(
        <Fragment>
            <Header/>
            {props.children}
        </Fragment>
   );
}

export const HomeTemplate = ({Component,...rest})=>{
    return (
        <Route {...rest } render= { ()=>{
            return (
                <HomeLayout>
                    <Component/>
                </HomeLayout>
            );
        } }  />
    );
}