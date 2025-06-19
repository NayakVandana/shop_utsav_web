const FormError = ({ error }: any) => {
    return error  && <span className="text-sm text-red-500 mt-1.5">{error}</span>
}
export default FormError