"use client"
export default function Layout(props: { children: React.ReactNode; }) {
    
    function fetchToServer() : void{
        fetch('http://localhost:9999/posts').then((res)=>{
            return res.json().then((data)=>{
                console.log(data);
            })
        })
    }

    /**  Next.js Treat Components as Server Side Component firstly! */

    // If you want to use Client Side API Like UseState or UseEffect hook OR onClick Toggle
    // Write "use client" on the top of CODE

    return (
        <>
            <button onClick={fetchToServer}>fetch</button>
            <br></br>
            <>props.children =  {props.children}</>
        </>
    )
}