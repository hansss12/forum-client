import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { postData, useFetchCommentThreads, useFetchDetailThreads } from "../../store/actions/action"
import { useEffect, useState } from "react"
import Card from "./Card"
import Comment from "./Comment"

export default function DetailThread() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
      comment: "",
  });
  const handleChange = (event) => {
      setForm({
          ...form,
          [event.target.name]: event.target.value,
      });
  };
  useEffect(() => {
    dispatch(useFetchDetailThreads(id))
    dispatch(useFetchCommentThreads(id))
  }, [id])
  const thread  = useSelector((state) => {
      return state.threadReducer.detailThread;
  })
  const comment = useSelector((state) => {
      return state.threadReducer.comments;
  });

  const postComment = async (event) => {
    event.preventDefault();
    const res = await dispatch(
        postData(
            `threads/comments/${id}`,
            form,
            "POST",
        )
    );
    if (!res.success) {
        throw new Error(res.message);
    }
    setForm({
        comment: "",
    });
    dispatch(useFetchCommentThreads(id))
  }

  const like = async () => {
      const res = await dispatch(postData(`threads/likes/${id}`, form, "POST"));
      if (!res.success) {
          throw new Error(res.message);
      }
  };

    return (
        <div className="p-2">
            <div className="bg-white rounded-xl mb-10">
                <Card data={thread} type={"detail"} />

                <form onSubmit={postComment}>
                    <label for="chat" className="sr-only">
                        Your message
                    </label>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <button
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            <span className="sr-only">Write Comment</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                              like()
                            }}
                            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            <span className="sr-only">Like</span>
                        </button>
                        <textarea
                            id="chat"
                            rows="1"
                            name="comment"
                            value={form.comment}
                            onChange={handleChange}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#4253ef] focus:border-[#4253ef] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your comment..."
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-[#4253ef] rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 rotate-90"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </div>
            {comment?.length == 0 ? <></> :
              <div className="bg-white rounded-xl pb-10 mb-10">
                  <h1 className="pt-10 pl-10 text-3xl font-semibold pb-2">
                      Comments
                  </h1>
                  <div className="overflow-scroll max-h-[50vh]">
                      {comment.map((el) => {
                          return <Comment data={el} key={el.id} />;
                      })}
                  </div>
              </div>
            }
        </div>
    );
}

