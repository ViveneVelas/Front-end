import React from "react";
import styles from "./PrimaryButton.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";


const PrimaryButton = ({text, className, isPrimary}) => {

    const buttonClass = classNames(className, {});



    return(
        <>
            <div>
                <button className={styles[className]}>
                    {text}
                </button>
            </div>
        </>
    );
}

PrimaryButton.propTypes = {
    text: PropTypes.string,
    classNames: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool.isRequired
};    

export default PrimaryButton;