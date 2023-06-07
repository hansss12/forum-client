import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetchTopThreads } from "../../store/actions/action";
import Card from "./Card";

export default function TopThread() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(useFetchTopThreads());
  }, []);

  const top = useSelector((state) => {
    return state.threadReducer.topThread
  })
    return (
        <div className="pt-10">
            {top?.map((el) => {
                return (
                    <Card data={el}/>
                );
            })}
        </div>
    );
}
