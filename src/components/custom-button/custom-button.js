import React from 'react'
import {getClassString} from '../../utils';
import ButtonStyles from './button-styles';
import './custom-button.scss';

export const CustomButton = ({text, action, theme, disabled, selected}) => {

    return (
        <button disbled={disabled} className={selected? 'selected':''}style={{...ButtonStyles[theme]}} onClick={action}>
            {text}
        </button>
    )
}

export default CustomButton;