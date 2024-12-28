import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ array, onDelete, updateCurrentTodo }) => {
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            text={item.text}
            index={index}
            onDelete={onDelete}
            id={item.id}
            updateCurrentTodo={updateCurrentTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
