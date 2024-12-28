import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (value === '') return;

    onSubmit(value);
    setValue('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={e => setValue(e.target.value)}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={value}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
