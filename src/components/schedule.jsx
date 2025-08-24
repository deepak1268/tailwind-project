import { Calendar, Arrowleft, Arrowright } from "./icons"

export const Schedule =() => {
    return (
        <div>
            <div className="flex justify-between items-center bg-[#f6f7f9] rounded-xl h-14 p-4">
                <div className="flex gap-x-4 font-semibold text-xl">
                    <Calendar></Calendar>
                    <p>Monday, 14 October 2024</p>
                </div>
                <div className="flex gap-x-2">
                    <Arrowleft></Arrowleft>
                    <Arrowright></Arrowright>
                </div>
            </div>
        </div>
    )
}