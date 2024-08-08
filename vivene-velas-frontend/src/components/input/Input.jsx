import React from "react";
// importando classsNames para deixar classes dinânmicas
import classNames from "classnames";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import styles from "./Input.module.css";


/*
    Props para input

    label: recebemos uma label para exibir na input
    placeholder: recebemos uma string para exibir
    icon: recebemos uma string de um icon que vamos buscar da lib do iconify
    type: recebemos o tipo da input email, password, etc
    error: recebemos uma boolean para verificar se ha erros
*/
const Input = ({label, placeholder, icon, type, error}) => {
    const iconColor = error ? "#BA0000" : "#94CAD2";
    const errorClass = classNames("error-message", {"display-none": !error, "display-block": error})
    const className = classNames({"error": error, "default": !error})
    return (
        <div className={styles["input"]}>
          <label>{label}</label>
          <div className={styles[className]}>
            <input type={type} placeholder={placeholder} />
            <Icon 
                icon={icon}
                style={{
                    color: iconColor ,
                    display: "flex",
                    alignSelf: "center",
                    fontSize: "1 rem",
                    paddingRight: ".5rem"
                }}
            />
          </div>
          <label className={styles[errorClass]}></label>
        </div>
    );
}   

// Definindo PropTypes para validação de campos
Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired, // isRequired diz que a props é obrigatória
    error: PropTypes.bool
};

export default Input;