export default async function Layout(props: { children: React.ReactNode; }) {
    
    const serverData = await fetch('http://localhost:9999/posts');
    const posts = await serverData.json();
    console.log(posts);

    /**  Next.js Treat Components as Server Side Component firstly! */

    // If you want to use Client Side API Like UseState or UseEffect hook OR onClick Toggle
    // Write "use client" on the top of CODE

    return (
        <>
            <br></br>
            <>props.children =  {props.children}</>
        </>
    )
}