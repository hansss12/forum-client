import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
const formatter = buildFormatter(frenchStrings);

export default function Card({ data, type }) {
    const like = async (id) => {
        const res = await dispatch(
            postData(`/v1/threads/like/${id}`, "", "POST")
        );
        if (!res.success) {
            throw new Error(res.message);
        }
    };

    return (
        <>
            <div className="bg-white rounded-xl my-10" key={data.id}>
                <div className="p-12">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <div className="flex justify-between mt-5">
                        <div className="flex ml-4">
                            <img
                                src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                                alt="profile"
                                className="h-14 w-14 rounded"
                            />
                            <div className="ml-4">
                                <h1 className="text-lg font-medium">
                                    {data.maker}
                                </h1>
                                <h1 className="text-lg font-light text-[#a4a4a4]">
                                    <TimeAgo
                                        date={data.createDate}
                                        formatter={formatter}
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="p-2 px-5 bg-[#efeaff] text-[#9571ff] rounded-xl h-fit font-semibold">
                            Language
                        </div>
                    </div>
                    <p className="mt-10 font-light">{data.description}</p>
                    {type === "detail" ?
                    <></> : 
                    <div className="flex justify-start mt-5">
                        <div className="flex">
                            <div className="bg-[#f1eff3] p-2 rounded-xl mr-5 py-2 cursor-pointer" onClick={() => {
                              like(data._id)
                            }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-[#a4a4a4]"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </div>
                            <div className="bg-[#f1eff3] p-2 rounded-xl flex py-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-[#a4a4a4] mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h1 className="text-[#868686] ">Add Comment</h1>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}
