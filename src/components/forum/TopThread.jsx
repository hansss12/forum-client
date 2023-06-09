import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetchTopThreads } from "../../store/actions/action";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function TopThread() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(useFetchTopThreads());
  }, []);

  const top = useSelector((state) => {
    return state.threadReducer.topThread
  })
    return (
        <div className="p-2">
            {top?.map((el) => {
                return (
                    <Link to={`/forum/${el._id}`}>
                        <Card data={el}/>
                    </Link>
                );
            })}
        </div>
    );
}
