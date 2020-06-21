import React, {useContext, useState} from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoginInterface } from '../../interfaces/interfaces';
import history from '../../history';
import logIn from '../../lib/API';
import UserContext from '../../context/userContext';
import './login.scss'
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup.string().min(8, 'Your password should be a minimum of 8 characters')
        .matches(/(?:[0-9]+.*[A-Z]+)|(?:[A-Z]+.*[0-9]+)/,
            `Your password should contain  at least 1 number and one upper letter`),
});

const LoginPage: React.FC = _ => {
    const {setAuth} = useContext(UserContext);
    const [wentWrong, setWentWrong] = useState<string | null>(null)
    const { register, handleSubmit, errors } = useForm<LoginInterface>({
        validationSchema: LoginSchema,
    });
    const submitLogin = handleSubmit(({ email, password }):void => {
        logIn({email, password})
            .then((result) => {
                result.status === 202 ? setAuth(true) : setWentWrong('Something went wrong please try again')
                history.push('/dashboard')
            })
            .catch( _ => {
                setWentWrong('Something went wrong please try again')
            });
    });
    return <div className="loginPage">
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-md-8">
                    <div className="loginFormWrapper">
                        <form onSubmit={submitLogin}>
                            <div className="form-group">

                                <label form={'emailLogin'} >Login</label>
                                <input name="email" type="email" ref={register}  id="emailLogin"
                                       className="form-control" data-testid = "email"/>
                                { errors.email &&
                                <ErrorComponent testid={"emailError"} message={ String(errors.email.message) }/>}
                            </div>
                            <div className="form-group">
                                <label form={'loginPassword'}>Password</label>
                                <input name="password" type='password' ref={register} id={'loginPassword'}
                                       className="form-control"  data-testid = "password"/>
                                { errors.password &&
                                <ErrorComponent testid = {"passwordError"}
                                                message={ String(errors.password.message) }/> }
                            </div>
                            <button type="submit" data-testid = "submit" className={'btn btn-primary'} >
                                Log In
                            </button>
                        </form>
                        { wentWrong && <ErrorComponent testid={'submitIssue'} message={wentWrong} />}
                    </div>
                </div>
            </div>

        </div>
    </div>

}

export default LoginPage