import Styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={Styles.contactoContainer}>
      <p className={Styles.title}>👨🏻‍💻 Contacto 👨🏻‍💻</p>
      <p className={Styles.email}>📨 Email: it.sergiorodriguez@gmail.com</p>
    </div>
  );
};

export default Contacto;
