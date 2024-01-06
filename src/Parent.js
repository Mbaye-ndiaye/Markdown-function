
import React, {useState} from 'react'
import Textarea from './Textarea'
import Card from './Card'
import Button from './Button'

const Parent = () => {
   const [value, setValue] = useState("")
   const handleChange = (e) => {
    setValue(e.target.value)
   }

const handlDownLoad = () => {
    const blob = new Blob([value], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a')
    a.href = url
    a.download = 'blob-to-dowload.text';
     a.click()
    URL.revokeObjectURL(url)

}

  return (
    <div className=''>
        <div className='col-12 container row '>
        <div className='col-sm-5 col-lg-4 m-auto'>
            <Textarea value={value} onChange={handleChange}/>
        </div>
        <div className='col-sm-4 col-lg-3 m-auto'>
        <Card value={value}/>
        </div>
        </div>
       <div className='text-center '>

        <Button className='btn btn-primary bg-dark border-0' onClick={handlDownLoad}>Download Teaxt</Button>
       </div>
    </div>
  )
}

export default Parent
