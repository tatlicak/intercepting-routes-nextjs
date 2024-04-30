import Link from "next/link";
const Comp1 = () => {
  return (
    <div>
        <h1>Comp1</h1> 
        <Link href={'/comp1/comp2'}>Go to the Comp2 </Link>
        
    </div>
  )
}

export default Comp1;