import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../actions/userAction'

export default function Clients() {
  const { username } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo(username))
  }, [dispatch, username]) // dependencies of the effect

  // Get the userInfo from the Redux state
  const leetCode_info = useSelector((state) => state.leetCode.leetCode_info)
  console.log(leetCode_info)

  // Check if userInfo exists and if it's loading
  if (!leetCode_info) {
    return <div>Loading...</div>
  }

  const { name, avatar, ranking, reputation } = leetCode_info

  return (
    <div>
      <h1>{name}</h1>
      <img src={avatar} alt={name} />
      <p>Ranking: {ranking}</p>
      <p>Reputation: {reputation}</p>
    </div>
  )
}
