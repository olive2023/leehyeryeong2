import React from 'react'
import { MdRemoveCircleOutline,MdCheckBoxOutlineBlank,MdCheckBox } 
from "react-icons/md";
import classNames from 'classnames';
import '../styles/TodoListItem.scss';

function TodoListItem({todo, onToggle, onRemove}) {
  const {id, text, checked} = todo;//구조분해할당

  return (
    <div className='TodoListItem'>
      <div className={classNames('Checkbox',{checked})} onClick={() => {onToggle(id)}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => {onRemove(id)}}><MdRemoveCircleOutline /></div>
    </div>
  )
}

export default TodoListItem