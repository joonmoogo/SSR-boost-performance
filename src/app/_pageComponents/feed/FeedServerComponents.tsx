import FeedBox from "@/app/_components/FeedBox";
import { Select } from "@/app/_components/Select";
import { getAllFeeds, getDatasByCount } from "@/app/_util/customFetch";
import { feedDTO } from "@/types/DTO";

export default async function FeedServerComponents(props: { viewport: any }) {
    const viewport = props.viewport;
    const data: feedDTO[] = await getDatasByCount('feed', 1, 9);
    return (
        <>
            {data.map((post: feedDTO) => {
                return (
                    <FeedBox key={post.id} item={post} viewport={viewport} />
                )
            })}
        </>
    )
}