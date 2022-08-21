import React, {useState} from 'react';

const NotDoneItem = ({item}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <li>
            <label>
                <input type="checkbox" checked={isChecked} readOnly/>
                        {item.title}
            </label>
        </li>
    )
}

export default NotDoneItem;