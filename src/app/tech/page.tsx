import TechBox from "../components/TechBox"

export default function Tech() {
    return (
        <div className="main-page">
            {[1,2,3,4,5].map((e,index)=>{
                return(
                    <TechBox key={index}/>
                )
            })}
        </div>
    )
}