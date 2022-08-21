import React, {useState, useEffect} from 'react';
import Item from './Item';
import NotDoneItem from './NotDoneItem';
import DoneItem from './DoneItem';

const List = ({mode}) => {
    const getAllFromStorage = () => {
        const storageItems = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let obj = JSON.parse(localStorage.getItem(key))
            storageItems.push(obj);
        }
        console.log("🚀 ~ file: List.js ~ line 9 ~ getAllFromStorage ~ storageItems", storageItems)
        return storageItems;
    }

    const batch = [];
    const [searchValue, setSearchValue] = useState('');
    const [allItems, setAllItems] = useState(getAllFromStorage());

    useEffect(() => setAllItems(getAllFromStorage()), [mode]);

    const handleSave = () => {
        const key = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
        const title = document.getElementById("toDoTitle").value;
        if (title === '') return;
        localStorage.setItem(key, JSON.stringify({ key: key, title: title, isDone: false}));
        document.getElementById("toDoTitle").value = '';
        setAllItems(getAllFromStorage());
    }

    const callback = (id) => {
        batch.push(id);
    }

    const markUndone = (items) => {
        items.map(item => localStorage.setItem(item.key, JSON.stringify({ key: item.key, title: item.title, isDone: false})));
        const keysArray = items.map(item => item.key);
        const newList = allItems.filter((item) => !keysArray.includes(item.key));
        setAllItems(newList);
    }

    return (
        <>
            {
                mode === 'all'?
                <div>
                    <label>
                        Create a new ToDo item:
                        <input id="toDoTitle" type="text"></input>
                        <button onClick={() => handleSave()}>Save</button>
                    </label>
                </div> :
                ''
            }
            <div>
                <label>
                    Search a ToDo item:
                    <input id="search" type="text" onChange={() => setSearchValue(event.target.value)}></input>
                </label>
            </div>
            <div>
                <ul>
                    {
                         searchValue ?
                         allItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => <Item key={item.key} item={item} />)
                         :
                         mode === 'all' ?
                         allItems.map(item => <Item key={item.key} item={item} />) :
                         mode === 'done' ?
                         (allItems.filter(item => item.isDone).map(item => <DoneItem key={item.key} item={item} func={callback} />))  :
                         (allItems.filter(item => !item.isDone).map(item => <NotDoneItem key={item.key} item={item} />))
                    }
                </ul>
            </div>
            {
                mode === 'done' ?
                <div>
                    <button onClick={() => markUndone(batch)}>Move to not-done</button>
                </div> :
                ''
            }
        </>
    )
}

export default List;