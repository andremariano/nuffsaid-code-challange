import ControlButton from './ControlButton';
import styled from 'styled-components';

interface IControls {
  toggleLabel: string;
  clearAllAction: () => void;
  toggleQueue: () => void;
}

const StyledControls = styled.div`
  display: flex;
  justify-content: center;
`;

const Controls:React.FC<IControls> = (props:IControls) => {
  return(
    <StyledControls>
      <ControlButton onClick={() => props.toggleQueue()}>{props.toggleLabel}</ControlButton>
      <ControlButton onClick={() => props.clearAllAction()}>Clear</ControlButton>
    </StyledControls>
  );
};

export default Controls;