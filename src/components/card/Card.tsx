import React from 'react'

export interface ICardProps {
  children: React.ReactNode
}

export function Card(props: ICardProps) {
  return (
    <>
      <div className="mx-auto max-w-md rounded-md bg-white p-4 text-black shadow-sm transition duration-500 ease-in-out hover:shadow-md">
        {props.children}
      </div>
    </>
  )
}
