import logoWithText from "../public/assets/RS_logo_with_staggered_text_cut.jpg";
import Image from "next/image";

function LandingPage() {
  return (
    <>
      <Image
        src={logoWithText}
        alt="reality scratch logo: hand with long black finger nails"
        className="py-20"
      ></Image>
      <div className="flex-wrap justify-center gap-15 my-20">
        <p className="font-serif text-center text-xl mx-10">
          A Berlin-based periodical for writers, artists, photographers,
          musicians, magicians, vampires and general flâneurs.
        </p>
        <button className="m-20 p-5 text-white bg-black rounded-sm text-base">
          Want in? Get in touch!
        </button>
      </div>
    </>
  );
}

export default LandingPage;
