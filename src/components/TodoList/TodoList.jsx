import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ array }) => {
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem text={item.text} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
