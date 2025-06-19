import { RefreshCw } from "react-feather";

const ResetButton = (props: any) => {
    return <>
        {/* <button {...props} className={`btn btn-primary md:btn-block mt-4  ${props.className} `}> */}
        <button {...props} className={`btn btn-primary btn-outline  ${props.className} `}> 
            <RefreshCw width={15} />  Reset
        </button>
    </>
}

export default ResetButton;