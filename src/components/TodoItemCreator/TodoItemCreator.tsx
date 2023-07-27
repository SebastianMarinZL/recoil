import {useState} from 'react'
import {useSetRecoilState} from 'recoil'
import { todoListState } from '../../store/todos';
import { getId } from '../../utils/getId';

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState)

    const addItem = () => {
        if (!inputValue) return;
        
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ]);
        setInputValue('');
    };
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setInputValue(target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
};

export default TodoItemCreator;
