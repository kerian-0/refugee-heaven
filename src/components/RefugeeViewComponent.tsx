import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { refugeeById } from '../service/RefugeeService';
import type { RefugeeDto } from '../dto/RefugeeDto';

export default function RefugeeViewComponent() {
    const [ref,setRef]=useState<RefugeeDto>();
    const {id}=useParams();
    useEffect(()=>
    {
         refugeeById(id as any).then((res)=>
           
         setRef(res.data)
        ).catch(err=>console.log(err))
    },[id]
       
    )
  return (
    <>
    {
        <div>
            <p>{ref?.address}</p>
        <p>{ref?.age}</p>
        <p>{ref?.arrivalDate}</p>
        <p>{ref?.bgInfo}</p>
        <p>{ref?.dateOfBirth}</p>
        <p>{ref?.nationality}</p>
        <p>{ref?.nationality}</p>
        <p>{ref?.address}</p>
        <p>{ref?.email}</p>
        <p>{ref?.username}</p>

        </div>
    }
    </>
  )
}
