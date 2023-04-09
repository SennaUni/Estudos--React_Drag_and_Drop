import { Draggable } from 'react-beautiful-dnd'

import { TypeTask } from '../../data/dataset'

import { Container } from './styles';

type TypeTaskParams = {
  task: TypeTask
  index: number;
}

const Task = ({ index, task }:TypeTaskParams) => {
  return (
    <Draggable 
      draggableId={task.id} 
      index={index}
    >
    {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </Container>
    )}
</Draggable>
  )
}

export default Task