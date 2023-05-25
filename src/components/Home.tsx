import React from 'react'
import { Card } from './Card'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className='min-h-screen py-4 w-full grid items-center gap-4'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}