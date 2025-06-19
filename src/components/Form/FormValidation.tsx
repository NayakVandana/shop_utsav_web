
export function validPassword(value: any) {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return reg.test(value);
}

export function validAadhaar(value: any) {
    let reg = /^\d{12}$/;
    return reg.test(value);
}

export function validPANIndividual(value: any) {
    let reg = /^[\w]{3}(p|P)[\w][\d]{4}[\w]$/;
    return reg.test(value);
}

export function validPANCorporate(value: any) {
    let reg = /^[\w]{3}(p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G|k|K)[\w][\d]{4}[\w]$/;
    return reg.test(value);
}

export function validGSTIN(value: any) {
    let reg = /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[a-zA-Z]{1}[0-9a-zA-Z]{1})+$/
    return reg.test(value);
}

export function validPhone(value: any) {
    let reg = /^[5-9]\d{9}$/;
    return reg.test(value);
}

export function validEmail(value: any) {
    let reg = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return reg.test(String(value).toLowerCase());
}

export function validAddress(value: any) {
    let reg = new RegExp(/^[#.0-9a-zA-Z\s,-]+$/)
    return reg.test(value);
}

export function validReputeIdCorporate(value: any) {
    let reg = new RegExp(/^RC-\d\d\d\d-\d\d\d\d-\d\d$/)
    return reg.test(value);
}

export function validReputeIdIndividual(value: any) {
    let reg = new RegExp(/^RI-\d\d\d\d-\d\d\d\d-\d\d$/)
    return reg.test(value);
}

export function validReputeId(value: any) {
    let reg = new RegExp(/^R(C|I)-\d\d\d\d-\d\d\d\d-\d\d$/)
    return reg.test(value);
}
export function validAmount(value: any) {
    let reg = new RegExp(/^[0-9\s]+(\.\d{0,2})?$/)
    return reg.test(value);
}

export function documentValidation(file: any) {

    const fileMinSize = 0.001 * 1000 * 1000; // 1 KB
    const fileMaxSize = 5 * 1024 * 1024; // 2MB
    let Message: any = false;

    // validations
    if (!file) {
        Message = 'this field is required'
    } else if (!file.name.toLowerCase().endsWith('.pdf')) {
        // &&  !file.name.toLowerCase().endsWith('.jpeg') &&  !file.name.toLowerCase().endsWith('.jpg')
        Message = 'Document file must be an .pdf';
        // or .jpeg or .jpg file
    } else if (file.size < fileMinSize) {
        Message = 'Document file must be atleast 1 kb';
    } else if (file.size > fileMaxSize) {
        Message = 'Document file size cannot exceed 5MB size';
    }

    return Message;
}


export function isISOString(str: any) {
    // Regular expression for ISO 8601 date and time format
    const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;

    return isoRegex.test(str);
}

export function allowOnlyNumbers(value: any) {
    return /^\d*$/.test(value);
}
export function isValidPartialGSTIN(gstin) {
    // onChnage check valid or not 
    const partialGSTINRegex = /^([0][1-9]?|[1-2][0-9]?|[3][0-7]?)([a-zA-Z]{0,5}[0-9]{0,4}[a-zA-Z]{0,1}[1-9a-zA-Z]{0,1}[zZcC]{0,1}[0-9a-zA-Z]{0,1})$/;

    return partialGSTINRegex.test(gstin);
}


export function validCIN(value: any) {
    let reg = /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/;
    return reg.test(value);
}
export function validLLPIN(value: any) {
    let reg = /^[A-Z]{3}-\d{4}$/;
    return reg.test(value);
}

// DIN: Exactly 10 digits
export function validDIN(value) {
    return /^\d{10}$/.test(value);
}

// KID: [KTVX][A-Z]{2}[0-9]{12}[A-Z]
export function validKID(value) {
    return /^[KTVX][A-Z]{2}\d{12}[A-Z]$/.test(value);
}

// TAN: ^[a-zA-Z]{4}\d{5}[A-Za-z]$
export function validTAN(value) {
    return /^[A-Za-z]{4}\d{5}[A-Za-z]$/.test(value);
}

// Establishment ID: ^[A-Z]{2}[A-Z]{3}\d{7}[A-Z0-9]{3}$
export function validEstablishmentID(value) {
    return /^[A-Z]{5}\d{7}[A-Z0-9]{3}$/.test(value);
}

// IEC: 10 digits
export function validIEC(value) {
    return /^\d{10}$/.test(value);
}

// UDYAM: UDYAM-XX-XX-XXXXXXX
export function validUDYAM(value) {
    return /^UDYAM-[A-Z]{2}-\d{2}-\d{7}$/.test(value);
}

// LEI: 4 digits + 00 + 12 alphanumeric + 2 digits
export function validLEI(value) {
    return /^\d{4}00[\dA-Z]{12}\d{2}$/.test(value);
}

export function validEntityID(value) {
    return /^[A-Z]{2}[A-Z]{3}\d{7}[A-Z0-9]{3}$/.test(value);
}

export function validateBse(bse) {
    const pattern = /^[0-9]{6}$/;
    return pattern.test(bse);
}


export function detectIdType(value) {
    if (!value || typeof value !== 'string') return null;

    // Trim and uppercase for consistent validation
    const v = value.trim().toUpperCase();

    if (validDIN(v)) return 'DIN';
    if (validPANIndividual(v)) return 'PAN';
    if (validPANCorporate(v)) return 'PAN';
    if (validGSTIN(v)) return 'GSTIN';
    if (validCIN(v)) return 'CIN';
    if (validLLPIN(v)) return 'LLPIN';
    if (validKID(v)) return 'KID';
    if (validTAN(v)) return 'TAN';
    if (validEstablishmentID(v)) return 'ESTABLISHMENT_ID';
    if (validIEC(v)) return 'IEC';
    if (validUDYAM(v)) return 'Udyam';
    if (validLEI(v)) return 'LEI';
    if (validEntityID(v)) return 'EntityID';
    if (validateBse(v)) return 'BSE';
    
    return null;
}
