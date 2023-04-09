import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TypeColumn, TypeTask } from '../../data/dataset'

import { BsThreeDots } from 'react-icons/bs'

import Task from '../Task'
import Button from '../Buttom'

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Container, Header, TaskList, Title } from './styles'

type TypeParamsColumns = {
  column: TypeColumn;
  tasks: (TypeTask | undefined)[]
  index: number;
}

const Column = ({ column, index, tasks }:TypeParamsColumns) => {
  return (
    <Draggable 
      draggableId={column.id} 
      index={index}
    >
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
        >

          <Header
            {...provided.dragHandleProps}
          >
            <Title>
              {column.title}
            </Title>

            <Button>
              <BsThreeDots />
            </Button>
          </Header>
          
          <Droppable 
            droppableId={column.id} 
            type='task'
          >
              {(provided, snapshot) => (
                  <TaskList
                  ref={provided.innerRef}
                  // isDraggingOver={snapshot.isDraggingOver}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => {

                    if (!task) return

                    return <Task 
                      key={task.id} 
                      task={task} 
                      index={index} 
                    />
                  })}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
        </Container>
      )}
    </Draggable>
  )
}

export default Column