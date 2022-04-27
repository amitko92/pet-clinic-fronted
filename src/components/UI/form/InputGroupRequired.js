import InputGroup from "./InputGroup";

function InputGroupRequired({tagName, inputName, type, formData, handleChange, readOnly}){

    return (
        <InputGroup 
        tagName={tagName}
        inputName={inputName}
        inputId={inputName}
        type={type}
        inputValue={formData.value}
        isRequired={formData.isRequired}
        message={formData.message}
        isValid={formData.isValid}
        readOnly={readOnly}
        handleChange={handleChange}/>
    );
}

InputGroupRequired.defaultProps = {
    type:'text',
    tagName: '',
    inputId: '',
    inputName:'',
    readOnly:false,
    formData:{
        inputValue: '',
        isRequired: false,
        message:'',
        isValid:true
    },
    handleChange: () => console.log("NO handleChange FOR INPUT")
}

export default InputGroupRequired;