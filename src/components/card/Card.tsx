import React from "react";

export interface ICardProps {
    children: React.ReactNode
}

export function Card (props: ICardProps) {
  return (
    <>
    <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out">{props.children}
    </div>
    </>
  );
}
