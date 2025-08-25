const BentoCard = ({ title, description, image, video, className = "" }) => {
  return (
    <div className={`relative h-full w-full rounded-xl overflow-hidden shadow-lg  ${className}`}>
      
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute  size-full object-cover object-center"
        />
      )}

      <div className="relative z-10 p-5 flex flex-col justify-start max-w-60 h-full">
        <h3 className="text-3xl font-bold special-font text-white mb-2">{title}</h3>
        <p className="text-white text-sm opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default BentoCard;
