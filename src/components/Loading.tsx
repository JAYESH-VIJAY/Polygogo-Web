import { IMAGES } from "@/assets";

function Loading() {
  return (
    <div>
      <img
        loading="lazy"
        src={IMAGES.LOGO}
        className="lazyload inline w-20 h-20 my-2 mr-3 animate-bounce text-primary"
      />
      <h4 className="mt-4 font-semibold">Loading...</h4>
    </div>
  );
}

export default Loading;
