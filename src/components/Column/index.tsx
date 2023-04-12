import { Droppable, Draggable } from 'react-beautiful-dnd'

import { TypeColumn, TypeTask } from '../../data/dataset'

import Task from '../Task'

import MenuButton from '../MenuButton'
import AddCardButtom from '../AddCardButtom'

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

            <MenuButton />
          </Header>
          
          <Droppable 
            droppableId={column.id} 
            type='task'
          >
            {(provided, snapshot) => (
              <>
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

                <AddCardButtom />
              </>
            )}
            </Droppable>
        </Container>
      )}
    </Draggable>
  )
}

export default Column