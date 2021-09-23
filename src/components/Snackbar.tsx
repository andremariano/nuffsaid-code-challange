import { Snackbar, SnackbarContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { COLORS } from '../Theme/Custom';

interface ISnackbarProps {
  snackbarActive: boolean;
  message: string;
  closeAction: () => void
}


const SnackbarComponent:React.FC<ISnackbarProps> = (props:ISnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.snackbarActive}
      autoHideDuration={2000}
      onClose={props.closeAction}
    >
      <SnackbarContent style={{background: COLORS.ERROR}} message={props.message} action={[
        <Button key="undo" color="secondary" size="small" onClick={props.closeAction}>
          CLOSE
        </Button>
      ]}/>
    </Snackbar>
  )
}

export default SnackbarComponent;