import { Link } from "react-router-dom";

export default function Home() {
  const tiles = [
    {
      title: "Teams",
      path: "/teams",
      img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
    {
      title: "Tournaments",
      path: "/tournaments",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    },
    {
      title: "Events",
      path: "/events",
      img: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    },
    {
      title: "Gallery",
      path: "/gallery",
      img: "https://images.unsplash.com/photo-1509281373149-e957c6296406",
    },
  ];

  return (
    <div className="p-10">
      <div className="bg-blue-700 text-white text-center p-16 rounded-xl mb-12 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">
          Uttarakhand Ice Hockey Association
        </h1>
        <p className="text-xl">Promoting Ice Hockey across Uttarakhand</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiles.map((tile, index) => (
          <Link
            to={tile.path}
            key={index}
            className="rounded-xl shadow-lg overflow-hidden border hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={tile.img}
              alt={tile.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center font-bold text-xl">
              {tile.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
