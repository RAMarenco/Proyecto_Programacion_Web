import classes from './RegisterForm.module.scss';
import image from './../../assets/stock_image.jpeg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const history = useNavigate();

    return (
        <main>
            <div className={classes["Form"]}>
                <div className={classes["inputs"]}>
                    <form action="" method='post' className={classes["form-fields"]}>
                        <h2 className={classes["title"]}>Crear cuenta</h2>

                        <label className={classes["label"]}>Usuario</label>
                        <input type="text" name="usuario" placeholder="Ingrese su usuario" className={classes["input"]}/>

                        <label className={classes["label"]}>Nombre</label>
                        <input type="text" name="nombre" placeholder="Ingrese su nombre" className={classes["input"]}/>

                        <label className={classes["label"]}>Apellido</label>
                        <input type="text" name="apellido" placeholder="Ingrese su apellido" className={classes["input"]}/>

                        <label className={classes["label"]}>Correo electrónico</label>
                        <input type="text" name="nombre" placeholder="alguien@ejemplo.com" className={classes["input"]}/>
                    
                        <input type="submit" value="CONTINUAR" className={classes["submit-button"]} 
                        onClick = {() => {
                            history("/Register/2");
                        }} />

                        <hr className={classes["line"]}/>

                        <div className={classes["new-user-div"]}>
                            <span className={classes["Span"]}>¿Ya tienes una cuenta?</span>
                            <a className={ classes["linked-text"] } onClick = {() => {
                                history("/Login");
                            }}>
                                Inicia sesión
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

export default Register;