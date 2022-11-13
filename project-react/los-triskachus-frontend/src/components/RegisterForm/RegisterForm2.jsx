import classes from './RegisterForm.module.scss';
import image from './../../assets/stock_image.jpeg';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown, MdCalendarToday } from 'react-icons/md';

const Register2 = () => {
    const history = useNavigate();

    return (
        <main>
            <div className={classes["Form"]}>
                <div className={classes["inputs"]}>
                    <form action="" method='post' className={classes["form-fields"]}>
                        <h2 className={classes["title"]}>Crear cuenta</h2>

                        <div className={ classes["side-inputs"] }>
                            <div>
                                <label className={classes["label"]}>Fecha Nacimiento</label>
                                <div className={ classes["side-input-text"] }>
                                    <input type="text" name="birth-date" placeholder="dd/mm/aaaa" className={classes["input"]}/>
                                    <span><MdCalendarToday className={ classes["calendar"] }/></span>
                                </div>
                            </div>

                            <div>
                                <label className={classes["label"]}>Gender</label>
                                <div className={ classes["side-input-text"] }>
                                    <input type="text" name="gender" placeholder="-" readonly="readonly" className={classes["input"]}/>
                                    <span><MdKeyboardArrowDown className={ classes["arrow"] }/></span>
                                </div>
                            </div>
                        </div>

                        <label className={classes["label"]}>Contraseña</label>
                        <input type="password" name="password" placeholder="Mínimo 8 caracteres" className={classes["input"]}/>

                        <label className={classes["label"]}>Repita la contraseña</label>
                        <input type="password" name="nombre" placeholder="Mínimo 8 caracteres" className={classes["input"]}/>
                    
                        <input type="submit" value="REGISTRARSE" className={classes["submit-button"]} 
                        onClick = {() => {
                            history("/Login");
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

export default Register2;