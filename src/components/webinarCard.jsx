import { Recording } from "./icons"

export const WebinarCard = ({ time, status, title }) => {
  return (
    <div className="m-2 flex rounded-md p-2 items-center justify-between w-[350px]">
      {/* Time Section */}
      <div className="text-2xl font-semibold w-28">{time}</div>

      <div className="ml-3 w-1 h-15 bg-blue-900"></div>

      {/* Details Section */}
      <div className="flex flex-col flex-1 ml-4">
        {status ? (
          <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
            <span className=" text-gray-700">Live</span>
            <Recording className="w-4 h-4 text-red-500" />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-blue-500 text-sm font-medium">
            <span className="text-gray-700">Upcoming</span>
            <Recording className="w-4 h-4 text-blue-500" />
          </div>
        )}
        <div className="text-gray-800 text-lg font-semibold">{title}</div>
      </div>
    </div>
  )
}
