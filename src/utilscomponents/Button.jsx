import React from "react";
import styles from '../../styles/button.module.css'

export function PrimaryButton({content}){
    return(
        <div className={styles.primary_button}>{content}</div>
    )
}