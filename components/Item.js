import React, {useState} from 'react';

const Item = ({item}) => {
    const [isChecked, setIsChecked] = useState(item.isDone);

    const handleCheck = (checked) => {
        setIsChecked(!checked);
        localStorage.setItem(item.key, JSON.stringify({key: item.key, title: item.title, isDone: !checked}))
    }

    return (
        <li>
            <label>
                {
                    isChecked ?
                    <input type="checkbox" checked={isChecked} readOnly/> :
                    <input type="checkbox" checked={isChecked} onChange={() => handleCheck(isChecked)}/>
                }
            {item.title}
            </label>
        </li>
    )
}

export default Item;