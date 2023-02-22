import logoWithText from "../public/assets/RS_logo_with_staggered_text_cut.jpg";
import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col h-100%">
        <Image
          src={logoWithText}
          alt="reality scratch logo: hand with long black finger nails"
          className="lg:max-w-xl"
        ></Image>
        <div className="flex flex-col mt-10%">
          <p className="font-serif text-center text-lg p-10%">
            A Berlin-based periodical for writers, artists, photographers,
            musicians, magicians, vampires and general flâneurs.
          </p>
          <button className="p-8% text-white bg-black rounded text-xl mx-10%">
            <Link href="mailto:info@realityscratch.com">
              Want in? Get in touch!
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
