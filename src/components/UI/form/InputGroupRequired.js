import InputGroup from "./InputGroup";

function InputGroupRequired({tagName, inputName, type, formData, handleChange}){

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
        handleChange={handleChange}/>
    );
}

InputGroupRequired.defaultProps = {
    type:'text',
    tagName: '',
    inputId: '',
    inputName:'',
    formData:{
        inputValue: '',
        isRequired: false,
        message:'',
        isValid:true
    },
    handleChange: () => console.log("NO handleChange FOR INPUT")
}

export default InputGroupRequired;