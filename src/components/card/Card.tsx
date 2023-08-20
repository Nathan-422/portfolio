export interface ICardCompProps {
    contents: string;
}

export function CardComp (props: ICardCompProps) {
  return (
    <>
    <div className="bg-white text-black mx-auto max-w-md p-4 rounded-md shadow-sm hover:shadow-md transition duration-500 ease-in-out">     {props.contents}
    </div>
    </>
  );
}
