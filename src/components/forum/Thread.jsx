import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchThreads } from "../../store/actions/action";
import Card from "./Card";

export default function Thread() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(useFetchThreads())
    }, [])
    const thread  = useSelector((state) => {
        return state.threadReducer.threads
    })
    return (
        <div className="pt-10">
            {thread.threads?.map((el) => {
                return (
                    <Card data={el} />
                );
            })}
        </div>
    );
}
