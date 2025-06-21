const FormButton = (props: any) => {
    return <>
        {/* <button {...props} className={`btn btn-primary md:btn-block mt-4  ${props.className} `}> */}
        <button {...props} className={`btn btn-blue-700 mt-4  ${props.className} disabled:bg-opacity-95 disabled:cursor-not-allowed`}> 
            {props.title}
        </button>
    </>
}

export default FormButton;