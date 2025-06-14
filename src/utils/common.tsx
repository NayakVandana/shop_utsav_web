import moment from "moment"
import { AlertTriangle, Globe, User } from "react-feather"
import { COMPANY_SEARCH, LEDNER_TRANSACTION_STATUS,  TRANSACTION_STATUS } from "./constants"
import toast from "./toast"
import { renderName } from "@/ui/common/functions"


export const handleResponse = (response: any) => {
    if (!response) {
        return {}
    }
    if (response.success) {
        return response?.data
    } else {
        try {

            toast({
                message: response?.error,
                status: 'danger',
                position: 'top',
            })

        } catch (error) {
            console.log("toast not working");
        }
    }
}
export const renderDays = (days: string) => {
    return days + " Day(s)"
}


export const renderRequestStatus = (status: string, size: any = "") => {
    let statusText = "";
    let className = "";
    switch (status) {
        case TRANSACTION_STATUS.ACCEPTED:
            statusText = "Accepted";
            className = "badge-primary";
            break;
        case TRANSACTION_STATUS.PENDING:
            statusText = "Pending";
            className = "badge-warning";
            break;

        case TRANSACTION_STATUS.REJECTED:
            statusText = "Rejected";
            className = "badge-error";
            break;

    }

    className = className + " " + size
    return <span className={"badge  " + className}>
        <span className="truncate">{statusText}  </span>
    </span>
}

export const renderStatus = (status: string, size: any = "") => {
    let statusText = "";
    let className = "";
    switch (status) {
        case TRANSACTION_STATUS.ACCEPTED:
            statusText = "Current";
            className = "badge-primary";
            break;
        case TRANSACTION_STATUS.DRAFT:
            statusText = "Draft";
            className = "badge-ghost";
            break;
        case TRANSACTION_STATUS.PENDING:
            statusText = "Pending";
            className = "badge-warning";
            break;
        case TRANSACTION_STATUS.REJECTED:
            statusText = "Rejected";
            className = "badge-error";
            break;
        case TRANSACTION_STATUS.DELETED:
            statusText = "Deleted";
            className = "badge-error";
            break;
        case TRANSACTION_STATUS.OVERDUE:
            statusText = "Overdue";
            className = "badge-warning";
            break;

        case TRANSACTION_STATUS.CRITICAL_DUE:
        case TRANSACTION_STATUS.CRITICALDUE:
            statusText = "Critical Due";
            className = "badge-error";
            break;

        case TRANSACTION_STATUS.BAD_DEBT:
        case TRANSACTION_STATUS.BADDEBT:
            statusText = "Bad Debt";
            className = "badge-error";
            break;

        case TRANSACTION_STATUS.IN_COURT:
            statusText = "In Court";
            className = "badge-warning";
            break;

        case TRANSACTION_STATUS.ISSUE:
            statusText = "Bad Debt";
            className = "badge-error";
            break;

        case TRANSACTION_STATUS.COMPLETED:
            statusText = "Completed";
            className = "badge-success";
            break;
        case COMPANY_SEARCH.GSTIN:
        case COMPANY_SEARCH.GST:
            statusText = "GST";
            // className = "bg-[#F7EAF8] text-[#A82AB5] rounded";
            className = "badge-warning rounded";
            break;
        case COMPANY_SEARCH.PAN:
            statusText = "PAN";
            // className = "bg-[#D1F7FF] text-[#14BCD3] rounded";
            className = "badge-warning rounded";
            break;
        case COMPANY_SEARCH.RI:
        case COMPANY_SEARCH.REPUTE_ID:
            statusText = "REPUTE ID";
            className = "badge-warning rounded";
            break;
        default:
            statusText = status?.replace(/_/g, " ").toLowerCase()
    }

    className = className + " " + size
    return <span className={"badge  " + className}>
        <span className="truncate">{statusText}  </span>
    </span>
}

export const landerStatus = (status) => {
    console.log(status);
    let statusText = "";
    let className = "";
    let toolTipText = "";


    switch (status) {
        case LEDNER_TRANSACTION_STATUS.DRAFT:
            className = "bg-gray-100 text-gray-500";
            statusText = "DRAFT";
            toolTipText = "The Transaction Is Still in Draft Status and Has Not Been Sent.";
            break;
        case LEDNER_TRANSACTION_STATUS.ACCEPTED:
            className = " bg-primary-100  text-primary-500";
            statusText = "ON GOING";
            toolTipText = "The EMI Schedule Is Currently Active";
            break;
        case LEDNER_TRANSACTION_STATUS.REJECTED:
            className = " bg-red-100  text-red-500";
            statusText = "DECLINE";
            toolTipText = "The Borrower has rejected the transaction";
            break;
        case LEDNER_TRANSACTION_STATUS.PENDING:
            className = " bg-yellow-100  text-yellow-500";
            statusText = "PENDING";
            toolTipText = " Currently Waiting for the Borrower's Approval to Proceed. ";
            break;
        case LEDNER_TRANSACTION_STATUS.OVERDUE:
            className = " bg-red-100  text-red-500";
            statusText = "OVERDUE";
            toolTipText = "The EMI Schedule Is Overdue.";
            break;
        case LEDNER_TRANSACTION_STATUS.DUE:
            className = "bg-yellow-100 text-yellow-500";
            statusText = "DUE";
            toolTipText = " Payment amount remains due.";
            break;
        case LEDNER_TRANSACTION_STATUS.ON_GOING:
            className = "bg-yellow-100 text-yellow-500";
            statusText = "ON GOING";
            toolTipText = "The EMI Schedule Is Currently Active";
            break;
        case LEDNER_TRANSACTION_STATUS.NO_DUE:
            className = " bg-primary-100  text-primary-500";
            statusText = "NO DUE";
            toolTipText = "The Borrower Has No Outstanding Dues.";
            break;
        case LEDNER_TRANSACTION_STATUS.COMPLETED:
            className = " bg-primary-100  text-primary-500";
            statusText = "COMPLETED";
            toolTipText = "The Borrower Has No Outstanding Dues, and the Transaction Is Complete.";
            break;


        default:
            break;
    }
    statusText = statusText?.replace(/_/g, " ").toUpperCase()

    className = className + " "
    return <span className='tooltip tooltip-secondary ' data-tip={toolTipText}>
        <span className={"badge  p-3  rounded " + className}>
            <span className="truncate">{statusText}  </span>
        </span>
    </span>
}







export const callStatus = (status) => {
    let statusClass = '';
    let statusText = '';
    
    if(!status){
        return false;
    }
    
    // Convert status to lowercase
    const statusLower = status.toLowerCase();

    switch (statusLower) {
        case 'answered':
            statusClass = 'bg-green-100 text-green-800';
            statusText = 'Answered';
            break;
        case 'pending':
        case 'sent':
            statusClass = 'bg-yellow-100 text-yellow-800';
            statusText = 'Sent';
            break;
        default:
            statusClass = 'bg-red-100 text-red-800';
            statusText = 'Not Answered';
            break;
    }

    return (
        <span className={`px-2 py-1 rounded ${statusClass}`}>
            {statusText}
        </span>
    );
};

export const emailStatus = (status) => {

    return <span className={`px-2 py-1 rounded ${status === 'sent' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {status === "sent" ? 'Sent' : "Failed"}
    </span>
}

export const smsStatus = (status) => {

    return <span className={`px-2 py-1 rounded ${status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {status === "Delivered" ? 'Delivered' : "Failed"}
    </span>
}

export const currencyFormat = (x: any, rupeeSymbol = true) => {



    x = parseFloat(Number(x).toFixed(2));
    if (typeof x !== 'number' || isNaN(x)) {
        x = 0;
    }
    x = x.toString();
    var afterPoint = "";
    if (x.indexOf(".") > 0) {
        afterPoint = x.substring(x.indexOf("."), x.length);
    }
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

    return rupeeSymbol ? "₹ " + res : res;
}

export const formatDate = (date: any, Time: any = false) => {
    return date ? (Time ? moment(date).format('DD MMM,YYYY | h:mm A') :
        moment(date).format('DD MMM,YYYY')) : '-'
}
export const formatedDateYMD = (date: any, Time: any = false) => {
    return date ? moment(date).format('YYYY-MM-DD') : false
}


export const renderIndex = (itemsPerPage: number, currentPage: number, index: number) => {
    return (currentPage * itemsPerPage) + 1 + index;
}

export const fileurl = (url: string) => {
    return process.env.FILE_STORAGE_URL + "/" + url;
}

export const assetsUrl = (url: string) => {
    return process.env.ASSETS_URL + url;
}

export function getReadableFileSize(bytes, si = false) {
    var thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + " B";
    }
    var units = si
        ? ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        : ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + " " + units[u];
}



export const generateSearchByBadge = (status: string, size: string = "") => {
    let statusText = "";
    let className = "badge"; // Start with a base class for the badge

    switch (status) {

        case COMPANY_SEARCH.MCA:
            statusText = "MCA";
            className += " bg-[#E6F0F8] text-[#02559D] rounded";
            break;
        case COMPANY_SEARCH.GST:
            statusText = "GST";
            className += " bg-[#F7EAF8] text-[#A82AB5] rounded";
            break;
        case COMPANY_SEARCH.GSTIN:
            statusText = "GST";
            className += " bg-[#F7EAF8] text-[#A82AB5] rounded";
            break;
        case COMPANY_SEARCH.PAN:
            statusText = "PAN";
            className += " bg-[#D1F7FF] text-[#0692A5] rounded";
            break;
        case COMPANY_SEARCH.RI:
        case COMPANY_SEARCH.REPUTE_ID:
            statusText = "REPUTE ID";
            className += " bg-[#E6F0F8] text-[#02559D] rounded";
            break;
        default:
            statusText = status.replace(/_/g, " ").toUpperCase();
            className += "  rounded";
            break;
    }

    if (size) { className += ` ${size}` }

    return (
        <span className={className}>
            {statusText}
        </span>
    );
};

// export const renderStatusCallAllTime = (status: string, size: any = "") => {
//     let statusText = "";
//     let className = "";
//     switch (status) {
//         case 'active':
//             statusText = "Active";
//             className = "badge-primary";
//             break;
//         case 'inactive':
//             statusText = "In Active";
//             className = "badge-error";
//             break;
//         case 'pending':
//             statusText = "In Active";
//             className = "badge-error";
//             break;

//         default:
//             statusText = status?.replace(/_/g, " ").toLowerCase()
//     }

//     className = className + " " + size
//     return <span className={"badge  " + className}>
//         <span className="truncate">{statusText}  </span>
//     </span>
// }

export const renderParameter = (paramerType) => {
    //  like gst , pan , international tax id



    return <span className={"badge  badge-ghost text-primary-400 bg-primary-50 rounded-sm  "}>
        <span className="truncate">{formatString(paramerType)}  </span>
    </span>
}

export function formatString(input) {

    if (!input) return

    return input
        .replace(/_/g, ' ') // Replace underscores with spaces
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

export const ServiceUnavailable = () => {
    return <div className="alert bg-red-200 text-red-900 shadow-lg mx-0 mt-3">
        <div>
            <AlertTriangle className="stroke-current flex-shrink-0 h-6 w-6" />
            <div>
                <h3 className="font-bold">Service temporarily unavailable</h3>
                <div className="text-xs">Expected to resume within 2-3 days.</div>
            </div>
        </div>
    </div>
}



export const renderRoleBadge = (role) => {
    let statusText = "";
    let className = "";


    className = className + " "
    return <span className={"badge  badge-primary badge-outline  badge-sm  text-xs my-auto" + className}>
        <span className="truncate ">{(role === 'undefined' || !role) ? "Custom" : renderName(role)}  </span>
    </span>
}


export const renderParty = (party_type) => {
    let renderText = "";
    let className = "";
    switch (party_type) {
        case "party1":
            renderText = "Party One"
            break;
        case "party2":
            renderText = "Party Two"
            break;

        default:
            break;
    }

    className = className + " "
    return <span className="">{renderText}  </span>
}


export const SETTLEMENT_SIGN_STATUS = {
    COMPLETED: 'COMPLETED',
    SIGN_PENDING: 'SIGN_PENDING'
}

export const SETTLEMENT_SIGN_STATUS_CONFIG = {
    [SETTLEMENT_SIGN_STATUS.COMPLETED]: {
        class: 'bg-green-100 text-green-800',
        text: 'Signed'
    },
    [SETTLEMENT_SIGN_STATUS.SIGN_PENDING]: {
        class: 'bg-yellow-100 text-yellow-600',
        text: 'Sign Pending'
    },
    DEFAULT: {
        class: 'bg-gray-100 text-gray-800',
        text: 'Unknown Status'
    }
};

export const renderSettlementSignStatus = (status) => {
    const { class: statusClass, text: statusText } = SETTLEMENT_SIGN_STATUS_CONFIG[status] || SETTLEMENT_SIGN_STATUS_CONFIG.SIGN_PENDING;

    return (
        <span className={`px-2 py-1 rounded ${statusClass}`}>
            {statusText}
        </span>
    );
};