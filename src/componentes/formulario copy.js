import React, { Component } from 'react';
import { Formik }  from 'formik'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
// import { Container } from './styles';

export default class Formulario extends Component {

    handleSubmit(values) {
        alert(values)
    }

    render() {
    return (
        <div>
         <Formik initialValues={{ nome:'bob'}} onSubmit={this.handleSubmit()}>
          {({values, handleChange, handleBlur, handleSubmit }) =>(
            <form onSubmit={handleSubmit} >
                {JSON.stringify(values)}
                <br/>
                <br/>
                <TextField 
                 name='nome'
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.nome}
                 label='Nome'/>  
                 <div>
                    <Button type='submit'>Enviar</Button>
                 </div>
            </form>    
          )}
         </Formik>
        </div>
    )
  }
}
