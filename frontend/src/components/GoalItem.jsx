import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

const GoalItem = ({goal}) => {
    const dispatch = useDispatch();

  return (
    <div className='goal'>
        <div>
            <h2>{goal.text}</h2>
            <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>x</button>
        </div>
    </div>
  )
}

export default GoalItem