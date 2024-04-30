import Link from "next/link";

const Comp4 = () => {
    return (
      <div>
          <h1> Comp4 </h1>
          <Link href={"/comp1/comp3"}> Return Comp3</Link>
          
      </div>
    )
  }
  
  export default Comp4