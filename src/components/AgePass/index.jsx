import React, {useCallback, useEffect} from 'react';
import classes from './AgePass.module.css'

const AgePass = (props) => {
    const ageCache = () => {
        props.setModalOpened(false);
        document.cookie = 'adult=true';
        props.setTurnMusic(true);
    }

    const checkFromCookies = useCallback(() => {
        const cookies = document.cookie.split('; ');

        cookies.forEach(cookie => {
            const cookieArr = cookie.split('=');

            if(cookieArr[0] === 'adult'){
                if(cookieArr[1] === 'true'){
                    props.setModalOpened(false);
                }
            }      
        })
    }, [document.cookie])

    useEffect(() => {
        checkFromCookies();
    }, [])

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Вам есть 18?</h2>
            <div className={classes.btns}>
                <div className={classes.decline} onClick={() => window.close()}>Нет</div>
                <div className={classes.confirm} onClick={() => ageCache()}>Да</div>
            </div>
        </div>
    );
}

export default AgePass;
