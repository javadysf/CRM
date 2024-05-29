const FormInput = ({name,label,value,type,onChange}) => {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input id={name} value={value} type={type} onChange={onChange} name={name} /> 
    </div>
  )
}
export default FormInput