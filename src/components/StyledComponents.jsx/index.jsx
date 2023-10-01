import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem;

  @media all and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    padding: 0 2rem;
  }
`

export const FormControl = styled.div`
    padding: 0 0 1rem;
    border-bottom: ${(props) => props.noBorder ? 'none' : '1px solid #ababab'};
    margin-bottom: 1rem;
`

export const InputLabel = styled.label`
  color: #555;
  display: block;
  margin-bottom: .5rem;
`

export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid #ababab;
  width: 100%;
  border-radius: .5rem;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1.5rem;
`

export const Option = styled.option`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 1rem;
  color: #555;

  &:focus {
    color: red;
  }

  &:hover {
    color: red;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ababab;
  padding: 1rem 2rem;
  border-radius: .5rem;
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.bgcolor ?? '#28289f'};
  transition: background-color .25s ease-in;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.bghovercolor ?? '#3838b5'};
    transition: background-color .25s ease-in;
  }

  &:disabled {
    background-color: #eee;
    color: #666;
    cursor: not-allowed;
  }
`

export const Button = styled(SubmitButton)`
  background-color: ${(props) => props.bgColor ?? '#1f6a6c'};
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: normal;

  &:hover{
    background-color: ${(props) => props.bgHoverColor ?? '#2d7f82'};
  }
  
`

export const Editbutton = styled(SubmitButton)`
  background-color: ${(props) => props.bgColor ?? '#f2054c'};
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: normal;
  margin-left: 1rem;

  &:hover{
    background-color: ${(props) => props.bgHoverColor ?? '#de5a82'};
  }
  
`