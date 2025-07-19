const Button = ({text}:{text:string}) =>{
    return (
        <button className= " flex items-center justify-between bg-gray-900 text-white font-medium py-2 px-6 mt-2 rounded-full  hover:bg-gray-950 transition duration-300">
            {text}
        </button>
    )
}

export default Button;