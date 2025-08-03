import { useState } from "react";
import Card from "./Card";
import Header from "./Header";

function Home() {
  const [openCardId, setOpenCardId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Instagram",
      img_profile_link: `${
        import.meta.env.BASE_URL
      }images/instagram_profile.png`,
      profile_name: "IDRIS",
      profile_description: "@arek_epik",
      posts: [
        `${import.meta.env.BASE_URL}images/posts/instagram1.png`,
        `${import.meta.env.BASE_URL}images/posts/instagram2.png`,
      ],
      link: "https://www.instagram.com/arek_epik",
      bgGradient: "from-red-700 to-purple-600",
      cardColor: "bg-red-500/40 backdrop-blur-sm text-white",
    },
    {
      id: 2,
      title: "Facebook",
      img_profile_link: `${
        import.meta.env.BASE_URL
      }images/facebook_profile.png`,
      profile_name: "Idris Saputra",
      profile_description: "visit profile",
      posts: [`${import.meta.env.BASE_URL}/images/posts/facebook1.png`],
      link: "https://www.facebook.com/drisxv",
      bgGradient: "from-blue-800 to-white/10",
      cardColor: "bg-blue-800/40 backdrop-blur-sm text-white",
    },
    {
      id: 3,
      title: "Github",
      img_profile_link: `${import.meta.env.BASE_URL}/images/github_profile.png`,
      profile_name: "drisxv",
      profile_description: "visit profile",
      posts: [],
      link: "https://github.com/drisxv",
      bgGradient: "from-black to-white/10",
      cardColor: "bg-black/40 backdrop-blur-sm text-white",
    },
    {
      id: 4,
      title: "LinkedIn",
      img_profile_link: `${
        import.meta.env.BASE_URL
      }/images/linkedin_profile.png`,
      profile_name: "Fahmi Idris",
      profile_description: "visit profile",
      posts: [],
      link: "https://www.linkedin.com/in/drisxv",
      bgGradient: "from-blue-500 to-white/10",
      cardColor: "bg-blue-500/40 backdrop-blur-sm text-white",
    },
  ];

  const handleCardClick = (card) => {
    if (openCardId === card.id) {
      window.open(card.link, "_blank");
    } else {
      setOpenCardId(card.id);
    }
  };

  const activeCard = cards.find((c) => c.id === openCardId);
  const backgroundClass = activeCard
    ? `bg-gradient-to-br ${activeCard.bgGradient}`
    : "bg-gradient-to-br from-black via-gray-900 to-gray-800";

  return (
    <div className={`relative min-h-screen transition-all duration-500`}>
      {/* Overlay Gradient Background */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${backgroundClass}`}
      />
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <Header></Header>
      {/* Social Media */}
      <div className=" flex flex-col lg:flex-row gap-4 p-6 border-t-2 border-gray-600 mx-2 lg:mx-10">
        <div className="font-normal w-full flex justify-center lg:items-center lg:border-r-2 border-gray-600">
          <h3 className="text-white lg:text-5xl lg:p-20 italic">
            Connect With me
          </h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {cards.map((item) => (
            <div key={item.id}>
              <Card
                title={item.title}
                img_profile_link={item.img_profile_link}
                profile_name={item.profile_name}
                profile_description={item.profile_description}
                posts={item.posts}
                isOpen={openCardId === item.id}
                onClick={() => handleCardClick(item)}
                cardColor={item.cardColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
