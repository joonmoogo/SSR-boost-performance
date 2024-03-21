export default function Layout(props: { children: React.ReactNode; }) {

    /**  Next.js Treat Components as Server Side Component firstly! */

    // If you want to use Client Side API Like UseState or UseEffect hook OR onClick Toggle
    // Write "use client" on the top of CODE

    return (
        <>
            IM LAYOUT
            {props.children}
            <br></br>
            IM LAYOUT
        </>
    )
}