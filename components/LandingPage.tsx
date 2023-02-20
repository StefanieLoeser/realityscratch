import logoWithText from "../public/assets/RS_logo_with_staggered_text_cut.jpg";
import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  return (
    <>
      <div className="flex-col items-center align-center">
        <Image
          src={logoWithText}
          alt="reality scratch logo: hand with long black finger nails"
          className="py-10"
        ></Image>
        <div className="flex flex-col gap-10 px-10">
          <p className="font-serif text-center text-lg">
            A Berlin-based periodical for writers, artists, photographers,
            musicians, magicians, vampires and general flâneurs.
          </p>
          <button className="p-5 text-white bg-black rounded-sm text-sm">
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
