import React, {useState} from 'react';

const DoneItem = ({item, func}) => {
    const [isBatchChecked, setIsBatchChecked] = useState(false);

    const handleCheck = (isChecked) => {
        func(item);
        setIsBatchChecked(!isChecked);
    }

    return (
        <li>
            <label>
                <input type="checkbox" checked={isBatchChecked} onChange={() => handleCheck(isBatchChecked)}/>
                {item.title}
            </label>
        </li>
    )
}

export default DoneItem;