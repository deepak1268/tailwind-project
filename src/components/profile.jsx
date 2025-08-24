export const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="rounded-2xl h-40 w-40">
        <img src="/randomPhoto.png" alt="Profile Picture" className="rounded-2xl h-40 w-40"/>
      </div>
      <div className="mt-5 mb-2 text-xl font-semibold">Deepak Aggarwal</div>
      <div>deepakagg1206@gmail.com</div>
      <div>9891220220</div>
      <div className="mt-3">Delhi,India</div>
    </div>
  );
};
