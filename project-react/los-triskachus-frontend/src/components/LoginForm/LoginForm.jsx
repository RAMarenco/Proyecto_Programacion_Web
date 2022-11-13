import classes from './LoginForm.module.scss';
import image from './../../assets/stock_image.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    return (
        <main>
            <div className={classes["Form"]}>
                <div className={classes["inputs"]}>
                    <form action="" method='post' className={classes["form-fields"]}>
                        <h2 className={classes["title"]}>Inicio de sesión</h2>

                        <label className={classes["label"]}>Cuenta</label>
                        <input type="text" name="usuario" placeholder="Ingrese su correo o usuario" className={classes["input"]}/>

                        <label className={classes["label"]}>Contraseña</label>
                        <input type="password" name="password" placeholder="Ingrese su contraseña" className={classes["input"]} />
                    
                        <div className={classes["forgot-pass"]}>
                            <a className={classes["Span"]} onClick = {() => {
                                history("/"); // *! Create forgot password view
                            }}>
                                ¿Olvidaste la contraseña?
                            </a>
                        </div>

                        <input type="submit" value="INGRESAR" className={classes["submit-button"]} 
                        onClick = {() => {
                            history("/");
                        }} />

                        <hr className={classes["line"]}/>

                        <div className={classes["new-user-div"]}>
                            <span className={classes["Span"]}>¿Eres un nuevo usuario?</span>
                            <a className={classes["linked-text"]} onClick = {() => {
                                history("/Register");
                            }}>
                                Crea una cuenta
                            </a>
                        </div>
                    </form>
                </div>

                <div className={classes["logo"]}>
                    <div className={classes["contenedor"]}>
                        <img src={image} alt="logo" className={classes["image"]}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login; 