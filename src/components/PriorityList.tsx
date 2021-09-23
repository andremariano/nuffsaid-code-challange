import { Message, Priority } from '../Api'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import styled from 'styled-components';
import { COLORS } from '../Theme/Custom';

interface IPriorityList {
  title: string;
  count: number;
  messageList?: Message[];
  priorityType: Priority;
  clearAction: (messageId:string) => void;
}

const StyledList = styled.div`
  margin: 0 8px;
  width: 400px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 12px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: end;
`;

const getPriorityColor = (priority:Priority):string => {
  switch (priority) {
    case Priority.Info:
      return COLORS.INFO;
    case Priority.Warn:
      return COLORS.WARNING;  
    case Priority.Error:      
  }
  return COLORS.ERROR;
}

const PriorityList:React.FC<IPriorityList> = (props:IPriorityList) => {
  return (
    <StyledList>
      <h2>{props.title}</h2>
      <p>count {props.count}</p>
      {props.messageList?.map?.(msg => (
        <StyledCard key={msg?.message} style={{background: getPriorityColor(props.priorityType)}}>
          <CardContent>
            {msg?.message}
          </CardContent>
          <StyledCardActions>
            <Button onClick={() => props.clearAction(msg?.message)}>Clear</Button>
          </StyledCardActions>
        </StyledCard>
      ))}
    </StyledList>
  );
};

export default PriorityList;