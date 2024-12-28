import { RiDeleteBinLine } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ text, index }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        Text#{index + 1}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
