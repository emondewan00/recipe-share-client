import RelatedSection from "./RelatedSection";

const Details = () => {
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-12 gap-y-8 container md:gap-8 justify-items-center bg-white shadow py-8 md:px-0">
        <iframe
          src="https://www.youtube.com/embed/FcEVbVrNIyg?si=LvApJleYQQe6rPWq"
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full col-span-12 md:col-span-6 md:h-80 h-56  md:px-8 "
        ></iframe>

        <div className="col-span-12 md:col-span-6  flex flex-col justify-center pr-8">
          <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
            White calzones with marinara sauce
          </h2>
          <p className="text-xs text-[#eb4a36] italic my-2">
            Breakfast and Brunch
          </p>

          <p>Country : Italy</p>
          <p>Total Sells : 100 </p>
          <p>Total Watch: 100 </p>
          <p>Total Likes : 100</p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iusto
            nostrum eum suscipit ab atque adipisci unde cumque eaque minima
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo
            maiores nostrum quas mollitia ut velit ratione quis nisi ex! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vero est dolor
            sequi, placeat debitis quibusdam unde quae. Ipsa, voluptas odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut
            doloribus blanditiis laudantium ipsam nam quos adipisci, similique
            necessitatibus natus.
          </p>
        </div>
      </div>
      <RelatedSection />
    </section>
  );
};

export default Details;
