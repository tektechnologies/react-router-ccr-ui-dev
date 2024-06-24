import { useParams } from "react-router-dom"

export default function TeamPage() {
    //use params method is coo, coo, cool.
    const { teamId } = useParams();

    return (
        <>
            Team page for {teamId}
        </>
    )
}