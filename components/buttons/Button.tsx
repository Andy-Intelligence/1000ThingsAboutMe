

interface ButtonProp {
    text?:string;
}


const Button = ({text}:ButtonProp) => {
  return (
    <div className='bg-orange-500 text-white rounded-md p-2 font-bold'>{text}</div>
  )
}

export default Button