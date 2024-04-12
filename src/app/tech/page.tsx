import TechBox from "../components/TechBox"
import config from "../config/config"

export default async function Tech() {
    const serverData = await fetch(`${config.localUrl}/api/tech`, { cache: 'no-store' });
    const data: techDTO[] = await serverData.json();
    return (
        <div className="main-page">
            {
                data.map((e, index) => {
                    return (
                        <TechBox item={e} key={index} />
                    )
                })
            }
        </div>
    )
}