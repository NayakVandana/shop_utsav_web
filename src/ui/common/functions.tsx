// import { HStack, Text } from "native-base";
// import { useChargesStore } from "../components/Charges/chargesStore";
// import Octicons from 'react-native-vector-icons/Octicons'
import { CheckIcon, CreditCardIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import moment from "moment";
// import { TRANSACTION_STATUS } from "../../utills/constants";
import { COMPANY_TYPE_TEXT } from "@/utils/constants";
// import Icon from 'react-native-vector-icons/FontAwesome5';


import CryptoJS from 'crypto-js';

import { X } from "react-feather";


export const formatDate = (date: any, Time: any = false) => {
  return date ? (Time ? moment(date).format('DD MMM,YYYY | h:mm a') :
    moment(date).format('DD MMM,YYYY')) : '-'
}
export const renderDays = (days: any) => {
  return days + " day(s)";
}


export const renderPrecentage = (per: any) => {
  return parseFloat(per) + "%";
}



export const currencyFormat = (x: any, rupeeSymbol: any = true) => {
  x = parseFloat(Number(x).toFixed(2));
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

export const ReputeinfoTokenFormat = (props: any) => {
  const { amount, iconSize, textClass } = props;
  return (
    <div className="flex gap-1">
      <CurrencyRupeeIcon width={iconSize || 18} />
      <span className={textClass} >{amount}</span>
    </div>
  )
}



export function getFiscalStartDate(date?: any) {
  var today = new Date();
  if (date) {
    today = date;
  }
  var curMonth = today.getMonth() + 1;
  var startDate = "";
  if (curMonth > 3) {
    return startDate = moment(today.getFullYear().toString() + "-04-01").format(
      "YYYY-MM-DD"
    );
  } else {
    return startDate = moment((today.getFullYear() - 1).toString() + "-04-01").format(
      "YYYY-MM-DD"
    );
  }
}

export function getFiscalEndDate(date?: any) {
  var today = new Date();
  if (date) {
    today = date;
  }
  var curMonth = today.getMonth() + 1;
  var enddate = "";
  if (curMonth > 3) {
    var nextYr1 = (today.getFullYear() + 1).toString();
    return enddate = moment(nextYr1 + "-03-31").format("YYYY-MM-DD");
  } else {
    var nextYr2 = today.getFullYear().toString();
    return enddate = moment(nextYr2 + "-03-31").format("YYYY-MM-DD");
  }
}

export function generateMonthsOptions(firstYear?: any) {
  var currentYear = new Date().getFullYear();
  var currentMonth = moment().month() + 1;

  if (!firstYear) {
    firstYear = currentYear;
  }
  // example of year will come 01 april 2023 - 31 March 2024
  let dateParts = firstYear.split(' ');
  let month: any = parseInt(moment().month(dateParts[1]).format('M'));
  let year: any = parseInt(dateParts[2]);



  var options: any = [];
  for (let y = year; y <= currentYear; y++) {
    for (let m = month || 1; m <= 12; m++) {
      month = false;
      if (currentYear === y && m > currentMonth) {
        continue;
      } else {
        let formatedVal = moment(m + " " + y, "M YYYY").format("MMMM YYYY");
        options.push({ value: formatedVal, label: formatedVal });
      }
    }
  }
  console.log(options)

  return options.reverse();
}

export const formatAddress = (data: any) => {
  const { line_1, line_2, street, city, state, pincode } = data
  // return string of address with conditions
  return `${line_1 ? line_1 + ', ' : ''} ${line_2 ? line_2 + ', ' : ''} ${street ? street + ', ' : ''} ${city ? city + ', ' : ''} ${state ? state + ', ' : ''} ${pincode ? pincode : ''}`
}
export const formatAddressApiSetu = (address) => {
  return `${address?.buildingNumber || ""} ${address?.floorNumber || ""}, ${address?.buildingName || ""
    }, ${address?.streetName || ""}, ${address?.location || ""}, ${address?.districtName || ""
    }, ${address?.stateName || ""}, ${address?.pincode || ""}`;
};


export function formatAmount(amount) {
  return Math.round(parseFloat(amount));
}

export function calculateDueDate(start_date, days) {
  return moment(start_date).add(days, 'days').format('YYYY-MM-DD')
}










// render status 
// export const renderStatus = (status: string, props: any) => {
//   switch (status) {
//     case TRANSACTION_STATUS.ACCEPTED:
//       return <Text color="#39B40D" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Current</Text>
//       </Text>
//       break;
//     case TRANSACTION_STATUS.PENDING:
//       return <Text color="#FA9601" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Pending</Text>
//       </Text>
//       break;
//     case TRANSACTION_STATUS.REJECTED:
//       return <Text color="#EB4E2D" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Rejected</Text>
//       </Text>
//       break;
//     case TRANSACTION_STATUS.OVERDUE:
//       return <Text color="#F0AB12" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Overdue</Text>
//       </Text>
//       break;
//     case TRANSACTION_STATUS.CRITICAL_DUE:
//     case TRANSACTION_STATUS.CRITICALDUE:
//       return <Text color="#FF3817" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Critical Due</Text>
//       </Text>
//       break;

//     case TRANSACTION_STATUS.IN_COURT:
//       return <Text color="purple.600" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >In Court</Text>
//       </Text>
//       break;

//     case TRANSACTION_STATUS.ISSUE:
//       return <Text color="purple.600" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Issue</Text>
//       </Text>
//       break;

//     case TRANSACTION_STATUS.COMPLETED:
//       return <Text color="#39B40D" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}
//         <Text >Complete</Text>
//       </Text>
//     default:
//       return <Text color="gray.600" fontSize={12} fontWeight={"600"}  {...props} >
//         {/* <Octicons name="dot-fill" size={12}  {...props} /> &nbsp; */}

//         <Text >{status?.replace(/_/g, " ").toLowerCase()}  </Text>
//       </Text>
//       break;
//   }
// }

// export const _RenderStatus = (props: any) => {
//   return renderStatus(props.status, props)
// }
// export const RenderStatus = memo(_RenderStatus)




// export const formatAddress = (data) => {
//   const { line_1, line_2, street, city, state, pincode } = data

//   return (
//     <Text>
//       {line_1 && <>{line_1}, </>}
//       {line_2 && <>{line_2}, </>}
//       {street && <>{street}, </>}
//       {city && <>{city}, </>}
//       {state && <>{state}, </>}
//       {pincode}
//     </Text>
//   )
// }
export function capitalizeFirstLetter(str: string) {
  let words = str.split(/[\s_]+/);
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}



export function isTimeBetween10AMAnd8PM() {
  const currentTime = moment();
  const start = moment('10:00', 'HH:mm');
  const end = moment('18:00', 'HH:mm');

  return currentTime.isBetween(start, end, null, '[]');
}
export function VerfiyBadge(props: any) {
  const { tooltipStyle = '' } = props
  const assets_url = process.env.ASSETS_URL

  return (
    <div className={`tooltip tooltip-secondary ${tooltipStyle}`} data-tip="Verified">
      <img src={`${assets_url}/Svgs/circle-check.svg`} alt="verfiy logo" className={`inline ${props.className ? props.className : 'w-8 h-8 ml-3'} `} />
    </div>
  )
}



export const fileSizeExceed5mb = (file) => {

  let _error = ''
  if (!file) _error = 'File is required'

  if (file.size > 5 * 1024 * 1024) {
    _error = 'File size exceeds 5MB'
  }
  return _error
}


export function isValidFile(file, allowedExtensions) {

  let error = ''
  if (!file) return error = 'File is required'

  let filename = file.name;
  const fileExtension = filename.slice(filename.lastIndexOf('.')).toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    return error = ''
  } else {
    return error = 'File type is not allowed'
  }
}


export function checkExpiry(challengeExpiryTime) {

  const expiryDatetime = moment(challengeExpiryTime, 'YYYY-MM-DD HH:mm:ss');


  const currentDatetime = moment();

  if (currentDatetime.isAfter(expiryDatetime)) {
    return true;
  } else {
    return false;
  }
}


export const renderPermissionText = (permission) => {

  if (!permission) {
    return false
  }
  let renderText = ''

  switch (permission) {
    case 'ALL':
      renderText = COMPANY_TYPE_TEXT.ALL
      break;
    case 'CREDITOR':
      renderText = COMPANY_TYPE_TEXT.DEBTOR
      break;
    case 'DEBTOR':
      renderText = COMPANY_TYPE_TEXT.CREDITOR
      break;

    default: renderText = COMPANY_TYPE_TEXT.ALL
      break;
  }

  return renderText
}


export function isNumberAvailable(inputString) {
  var pattern = /\d+/;
  return pattern.test(inputString);
}


export function validatePassword(password) {
  let text = ''
  if (!/(?=.*[a-z])/.test(password)) {
    text = "Lowercase letter is required.";
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    text = "Uppercase letter is required.";
  }
  if (!/(?=.*\d)/.test(password)) {
    text = "Digit is required.";
  }
  if (!/(?=.*[!@#$%^&*()\-_=+{};:,<.>])/.test(password)) {
    text = "Special character is required.";
  }
  if (password.length < 8) {
    text = "Minimum length should be 8 characters.";
  }

  return text;
}


export function renderName(name) {

  let _text = name ? name.split('_').join(' ') : ''
  return _text;
}



export function assetsPngUrl(photo) {
  let assets_url = `${process.env.ASSETS_URL}/pngs`
  return assets_url + photo
}


// Encryption
export const encryptData = (data, secretKey) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Decryption
export const decryptData = (encryptedData, secretKey) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return {};
  }
};

export const isIndividualGST = (gstNumber) => {

  if (typeof gstNumber === 'string' && gstNumber.length >= 6) {
    return gstNumber[5] === 'P';
  }

  return false;
}


export const isGSTType = (gstNumber, type) => {
  if (typeof gstNumber === 'string' && gstNumber.length >= 6) {
    return gstNumber[5] === type;
  }
  return false;
};

export const isPANType = (panNumber, type) => {

  if (typeof panNumber === 'string' && panNumber.length >= 6) {
    return panNumber[3] === type;
  }
  return false;
};

export const isLLP = (company_name) => {
  const companyName = "LLP";
  return company_name.includes(companyName);
};


export const calculateDaysDifference = (startDate, endDate) => {
  // Parse the dates using moment
  const start = moment(startDate, 'YYYY-MM-DD', true);
  const end = moment(endDate, 'YYYY-MM-DD', true);

  // Check if both dates are valid
  if (!start.isValid() || !end.isValid()) {
    console.error('Invalid date(s) provided:', { startDate, endDate });
    return 0; // Return 0 for invalid dates
  }

  // Calculate the difference in days
  const differenceInDays = end.diff(start, 'days');

  return differenceInDays < 0 ? 0 : differenceInDays;
};


export const isBeforeDate = (state_date, end_date) => {
  // Parse the dates using moment
  const startDate = moment(state_date);
  const endDate = moment(end_date);

  // Check if order_date is before credit_period_end_date
  const isDateBefore = startDate.isSameOrBefore(endDate);
  return isDateBefore
};



export const PaymentStatusBadge = ({ status }) => {
  let _badge
  let _text

  switch (status) {
    case 'received':
      _badge = 'bg-green-100 text-green-800';
      _text = 'Payment Received';
      break
    case 'pending':
      _badge = 'bg-yellow-100 text-yellow-800';
      _text = 'Payment Pending';
      break
    case 'refunded':
      _badge = 'bg-blue-100 text-blue-800';
      _text = 'Payment Refunded';
      break
    default:
      _badge = 'bg-gray-100 text-gray-800';
      _text = '-';
      break
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${_badge}`}>
      {_text}
    </span>
  );
};