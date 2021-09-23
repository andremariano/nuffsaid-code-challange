import React, { useState, useEffect } from 'react';
import generateMessage, { Message, Priority } from './Api';
import Header from './components/Header';
import CustomTheme from './Theme/Custom';
import Controls from './components/Controls';
import PriorityList from './components/PriorityList';
import styled from 'styled-components';
import Snackbar from './components/Snackbar';

const StyledListsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App: React.FC<{}> = () => {
  const [errors, setErrors] = useState<Message[]>([]);
  const [warnings, setWarnings] = useState<Message[]>([]);
  const [infos, setInfos] = useState<Message[]>([]);
  const [queueActive, setQueueActive] = useState(true);
  const [snackbarActive, setSnackbarActive] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if(!queueActive)
      return;

    const cleanUp = generateMessage((message: Message) => {
      switch (message.priority) {
        case Priority.Error :
          showNotification(message.message)
          setErrors(oldErrors => [message, ...oldErrors]);
          break;
        case Priority.Warn :
          setWarnings(oldWarnings => [message, ...oldWarnings]);
          break;
        case Priority.Info :
          setInfos(oldInfos => [message, ...oldInfos]);
          break;
      }
    });
    return cleanUp;
  }, [setErrors, setWarnings, setInfos, queueActive]);

  const clearError = (messageId:string = ''):void => {
    if (messageId !== '') {
      setErrors(oldMessages => oldMessages.filter(item => item.message !== messageId));
      return;
    }
    setErrors([]);
  }

  const clearWarning = (messageId:string = ''):void => {
    if (messageId !== '') {
      setWarnings(oldMessages => oldMessages.filter(item => item.message !== messageId));
      return;
    }
    setWarnings([]);
  }

  const clearInfo = (messageId:string = ''):void => {
    if (messageId !== '') {
      setInfos(oldMessages => oldMessages.filter(item => item.message !== messageId));
      return;
    }
    setInfos([]);
  }

  const clearAll = ():void  => {
    clearError();
    clearWarning();
    clearInfo();
  }

  const toggleQueue = ():void => {
    setQueueActive(!queueActive);
  }

  const showNotification = (message:string) => {
    setSnackbarActive(false);
    setSnackbarMessage(message);
    setSnackbarActive(true);
  }

  const handleSnackbarClose = () => {
    setSnackbarActive(false);
  }

  return (
    <CustomTheme>
      <Header />
      <Controls toggleLabel={queueActive ? 'STOP' : 'PLAY'} clearAllAction={clearAll} toggleQueue={toggleQueue}/>
      <StyledListsContainer>
        <PriorityList 
          title='Error Type 1' 
          count={errors.length} 
          messageList={errors} 
          priorityType={Priority.Error}
          clearAction={clearError}
        />
        <PriorityList 
          title='Error Type 2' 
          count={warnings.length} 
          messageList={warnings} 
          priorityType={Priority.Warn}
          clearAction={clearWarning}
        />
        <PriorityList 
          title='Error Type 3' 
          count={infos.length} 
          messageList={infos} 
          priorityType={Priority.Info}
          clearAction={clearInfo}
        />
      </StyledListsContainer>
      <Snackbar message={snackbarMessage} snackbarActive={snackbarActive} closeAction={handleSnackbarClose}/>
    </CustomTheme>
  );
}

export default App;
