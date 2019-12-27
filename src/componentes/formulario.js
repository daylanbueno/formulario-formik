import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, ErrorMessage,  Form as FormikForm }  from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import { Button, Card, CardContent, Typography, Checkbox, Radio } from '@material-ui/core';
import {SimpleSelectFormik as Seleciona} from './Seleciona'

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

const validations = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório'),
    sobreNome: yup.string().required('O sobre nome é obrigatório'),
    tipo: yup.string().required(' você deve seleciona um tipo ')
})

export default function Formulario() {
    const [tipo, setTipo] = React.useState("");
   const  classes  = useStyles();
   console.log('valor',tipo)
    return (
        <div>
          <Card className={classes.card}> 
           <Formik initialValues={{nome: '', sobreNome: '', isAlto:false, comidas: [], estudante:'', tipo: tipo}} 
                   onSubmit={handleSubmit} 
                   validationSchema={validations}>
            <FormikForm >
                <CardContent> 
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Formulário de cadastro
               </Typography>
               
                <div>
                  <Field  fullWidth name='nome' placeholder="Entre com o seu nome" as={TextField} />
                  <ErrorMessage component="spanError" name="nome" />
                </div>

                <div>
                  <Field fullWidth name='sobreNome' placeholder='Entre com o seu sobre nome' as={TextField} />
                  <ErrorMessage component="spanError" name="sobreNome" />
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
                    <Field  name='tipo' component={Seleciona} seleciona={setTipo} />
                    <ErrorMessage component='spanError' name='tipo' />
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
