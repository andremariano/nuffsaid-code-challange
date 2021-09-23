import Button, {ButtonProps} from '@material-ui/core/Button';
import React from 'react';

interface IButton extends ButtonProps {
  children?: string;
  className?: string;
}

const ControlButton:React.FC<IButton> = (props:IButton) => {
  return (
    <Button {...props} variant="contained" color="primary" className={props.className}>
      {props.children}
    </Button>      
  )
}

export default ControlButton;