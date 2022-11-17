import classes from './RegisterForm.module.scss';
import image from './../../assets/stock_image.jpeg';
import { useNavigate } from 'react-router-dom';

const RegisterForm = (props) => {
    const history = useNavigate();
    const { values, handleChange, nextStep } = props;

        return (
            <main>
                <div className={classes["Form"]}>
                    <div className={classes["inputs"]}>
                        <form className={classes["form-fields"]}>
                            <h2 className={classes["title"]}>Crear cuenta</h2>
    
                            <label className={classes["label"]}>Usuario</label>
                            <input type="text" name="user" placeholder="Ingrese su usuario" className={classes["input"]}
                            onChange={handleChange('user')}
                            defaultValue={values.user}
                            />
    
                            <label className={classes["label"]}>Nombre</label>
                            <input type="text" name="name" placeholder="Ingrese su nombre" className={classes["input"]}
                            onChange={handleChange('name')}
                            defaultValue={values.name}
                            />
    
                            <label className={classes["label"]}>Apellido</label>
                            <input type="text" name="lastname" placeholder="Ingrese su apellido" className={classes["input"]}
                            onChange={handleChange('lastname')}
                            defaultValue={values.lastname}
                            />
    
                            <label className={classes["label"]}>Correo electrónico</label>
                            <input type="text" name="email" placeholder="alguien@ejemplo.com" className={classes["input"]}
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            />
                        
                            <input type="submit" value="CONTINUAR" className={classes["submit-button"]} onClick={nextStep}
                            />
    
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

export default RegisterForm;