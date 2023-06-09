import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
const formatter = buildFormatter(frenchStrings);

export default function Comment({ data }) {
    return (
        <div className="flex space-x-4 px-10 py-5 border-b-2 border-slate-100 ">
            <img
                className="w-10 h-10 rounded-full"
                src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                alt="image"
            />
            <div className="font-medium dark:text-white">
                <div>{data.commentator}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <TimeAgo date={data.createDate} formatter={formatter} />
                </div>
                <div className="mt-2">
                    <h1 className="text-l text-black dark:text-gray-400 font-light">
                        {data.comment}
                    </h1>
                </div>
            </div>
        </div>
    );
}
