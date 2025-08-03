function Card({
  title,
  img_profile_link,
  profile_name,
  profile_description,
  posts = [],
  isOpen,
  onClick,
  cardColor,
}) {
  const defaultImage = "https://via.placeholder.com/50x50.png?text=No+Image";
  const imageProfile = img_profile_link || defaultImage;

  return (
    <div
      className={`rounded-xl p-4 cursor-pointer transition border border-white/10 shadow-md hover:shadow-xl ${cardColor}`}
      onClick={onClick}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <div
        className={`overflow-hidden transition-all duration-600 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {/* Start of the profile */}
        <div className="flex gap-2 items-center">
          <img
            src={imageProfile}
            alt="profile_icon"
            className="h-[6vh] w-[6vh] object-cover rounded-full"
          />
          <div className="grid grid-cols-1">
            <h3 className="text-sm font-bold">{profile_name || "Unknown"}</h3>
            <p className="text-sm text-blue-400">{profile_description}</p>
          </div>
        </div>

        {/* Post of the profile */}
        <div className="grid grid-cols-3 gap-1 mt-3">
          {posts.length > 0 ? (
            posts.map((postSrc, index) => (
              <img
                key={index}
                src={postSrc}
                alt={`post${index + 1}`}
                className="rounded-sm object-cover"
              />
            ))
          ) : (
            <p className="col-span-3 font-extralight text-center text-gray-200 text-sm">
              No post yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
