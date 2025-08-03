import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center py-5 lg:h-[100vh]">
      {/* Bagian Gambar */}
      <div className="w-full lg:justify-end">
        <img
          src={`${import.meta.env.BASE_URL}/images/header_profile.png`}
          alt="profile_icon"
          className="rounded-full mx-auto h-[10vh] lg:h-[50vh]"
        />
      </div>

      {/* Bagian Teks */}
      <div className="text-white text-center w-full mt-4 lg:mt-0 lg:text-5xl">
        {/* Teks Pertama */}
        <h1 className="font-mono">
          <ReactTyped
            strings={["Hello, I'm Fahmi Idris."]}
            typeSpeed={50}
            showCursor={false}
          />
        </h1>

        {/* Teks Kedua */}
        <h1 className="font-mono">
          <ReactTyped
            strings={[
              "FrontEnd Web Developer.",
              "UI Designer.",
              "Game Enthusiast.",
            ]}
            typeSpeed={60}
            backSpeed={30}
            startDelay={2000}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </h1>
      </div>
    </div>
  );
}

export default Header;
