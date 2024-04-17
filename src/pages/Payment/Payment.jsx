import { useLocation } from "react-router-dom"


export const Payment = () => {
   const location  = useLocation()
   const {check} = location.state 
   console.log(check);
  return (
    <div>Payment</div>
  )
}
