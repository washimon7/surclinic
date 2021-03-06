import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import MainContext from "../../global/main/MainContext";
import { POST } from "../../types";

const initialForm = {
    userName: '',
    password: ''
}

const SignIn = () => {

    let history = useHistory();
    const { setCurrentUser } = useContext(MainContext);
    const {
        form,
        formErrors,
        isLoading,
        response,
        resError,
        handleChange,
        handleSubmitSignInForm,
    } = useForm(initialForm, "http://localhost:8090/auth/signin", POST);

    useEffect(() => {
        if (response) {
            console.log('dentro response');
            setCurrentUser({ userName: response.username, email: response.email });
            history.replace("/");
        };
    }, [response, history]);

    return (
        <div className="sign-in">
            <form
                onSubmit={handleSubmitSignInForm}
            >
                <span className="clinic-branch">
                    <i className="fas fa-clinic-medical"></i> Sistema Web RCM
                </span>
                <h1>Inicia sesión</h1>
                <span className="link-registro">
                    ¿Todavía no tienes cuenta? 
                    <span>
                        <Link to="/registro"> Crea una cuenta</Link>
                    </span>
                </span>
                <label htmlFor="id-username">Nombre de usuario</label>
                <input
                    onChange={handleChange}
                    name="userName"
                    value={form.userName}
                    className={formErrors.userName && "input-error"}
                    id="id-username"
                    type="text"
                />
                {formErrors.userName &&
                    <span className="error">{formErrors.userName}</span>
                }
                <label htmlFor="id-password">Contraseña</label>
                <input
                    onChange={handleChange}
                    value={form.password}
                    className={formErrors.password && "input-error"}
                    name="password"
                    id="id-password"
                    type="password"
                />
                {formErrors.password &&
                    <span className="error">{formErrors.password}</span>
                }
                <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Iniciar sesión'}</button>
                <strong className="error">{resError && 'El usuario o la contraseña son incorrectos.'}</strong>
            </form>
            <div className="form-banner">
                <div className="banner"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5995f7" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,133.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
}

export default SignIn;