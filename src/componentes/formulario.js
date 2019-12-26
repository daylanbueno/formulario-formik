import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form as FormikForm }  from 'formik'
import TextField from '@material-ui/core/TextField'
import { Button, Card, CardContent, Typography, Checkbox, Radio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      width: '50%',
      height: '50%',
      margin: 'auto',
      marginTop: '10%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const  handleSubmit = values => alert(JSON.stringify(values))


export default function Formulario() {
   const  classes  = useStyles();
    return (
        <div>
          <Card className={classes.card}> 
           <Formik initialValues={{nome: '', sobreNome: '', isAlto:false, comidas: [], estudante:''}} onSubmit={handleSubmit} >
            <FormikForm>
                <CardContent> 
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Formulário de cadastro
               </Typography>
                <div>
                  <Field  fullWidth name='nome' placeholder="Entre com o seu nome" as={TextField} />
                </div>
                <div>
                  <Field fullWidth name='sobreNome' placeholder='Entre com o seu sobre nome' as={TextField} />
                </div>

                <div>
                  <label> É alto </label>
                  <Field name='isAlto' type='checkbox' as={Checkbox} />
                </div>
                
                <div>
                    Comidas
                </div>

                <div>   
                  Arroz:
                  <Field color='primary' name='comidas' value='arroz' type='checkbox' as={Checkbox}/>
                  Feijão:
                  <Field color='primary' name='comidas' value='feijão' type='checkbox' as={Checkbox} />
                  Dobradinha:
                  <Field  color='primary' name='comidas' value='dobradinha' type='checkbox' as={Checkbox} />
                </div>

                <div>  
                  Estudante:
                    Sim
                    <Field color='primary' name='estudante' value='sim' type='radio' as={Radio} />
                     Não
                    <Field color='primary' name='estudante' value='nao' type='radio' as={Radio} />
                </div> 
               
                <div>
                    <Button  type="submit">Enviar</Button>
                </div>
                </CardContent>
            </FormikForm>
           </Formik>
           </Card>
        </div>
    )
}
