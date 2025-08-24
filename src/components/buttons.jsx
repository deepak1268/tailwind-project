import { Meeting, Recording, Plus } from "./icons"

export const Buttons = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col justify-center items-center space-y-2">
                <div className="bg-[#7addd3] h-15 w-15 rounded-xl p-4">
                    <Meeting></Meeting>
                </div>
                <p>Schedule a Webinar</p>
            </div >
            <div className="flex flex-col justify-center items-center space-y-2">
                <div className="bg-[#7addd3] h-15 w-15 rounded-xl p-4">
                    <Plus></Plus>
                </div>
                <p>Join a Webinar</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <div className="bg-[#7addd3] h-15 w-15 rounded-xl p-4">
                    <Recording></Recording>
                </div>
                <p>Open Recording</p>
            </div>
        </div>
    )
}