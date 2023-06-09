import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchThreads } from "../../store/actions/action";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Thread() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(useFetchThreads())
    }, [])
    const thread  = useSelector((state) => {
        return state.threadReducer.threads
    })
    return (
        <div className="p-2">
            {thread?.threads?.map((el) => {
                return (
                    <Link to={`/forum/${el._id}`}>
                        <Card data={el} />
                    </Link>
                );
            })}
        </div>
    );
}
