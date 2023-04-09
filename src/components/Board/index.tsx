import { useState } from 'react'

import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import dataset, { TypeData } from '../../data/dataset'
import Column from '../Column'

import { Container } from './styles'

const Board = () => {
  const [data, setData] = useState<TypeData>(dataset)

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    console.log(destination, source, draggableId, type)

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return
  
    if (type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
          ...data,
          columnOrder: newColumnOrder
      }
      setData(newState)
      return;
    }

    const start = data.columns.find(column => column.id === source.droppableId);
    const finish = data.columns.find(column => column.id === destination.droppableId);

    console.log(start, finish)

    if (start && finish) {

      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);

        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...start,
            taskIds: newTaskIds
        }

        const newColumns = data.columns.map(column => {
          if (column.title === start.title) return newColumn
          else return column
        })
  
        setData({
          ...data,
          columns: newColumns,
        })

        return;
      }
      
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);

      const newStart = {
        ...start,
        taskIds: startTaskIds
      }
      
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      }   

      const newColumns = data.columns.map(column => {
        if (column.title === newStart.title) return newStart
        else if (column.title === newFinish.title) return newFinish
        else return column
      })

      setData({
        ...data,
        columns: newColumns,
      })
    }
  }

  return (
    <DragDropContext 
      onDragEnd={onDragEnd}
    >
      <Droppable 
        droppableId='all-columns' 
        direction='horizontal' 
        type='column'
      >
        {(provided) => (
          <Container 
            ref={provided.innerRef}
            {...provided.droppableProps} 
          >
            {data.columnOrder.map((value, index) => {

              const column = data.columns.find(task => task.id === value)
              const tasks = column?.taskIds.map(taskId => data.tasks.find(task => task.id === taskId))

              if (!column || !tasks) return

              return <Column 
                key={column.id} 
                column={column} 
                tasks={tasks} 
                index={index} 
              />
            })}

            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}


export default Board