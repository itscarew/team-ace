
type Data = {
    title: string;
    text: string
}

export const LabelComponent = ({ title, text }: Data) => {
    return (
        <div className='flex items-center justify-between ' >
            <div>
                <h1 className='font-bold'> {title} </h1>
                <p className='text-xs font-semibold text-gray-400 mt-1' > {text} </p>
            </div>
        </div>
    )
}