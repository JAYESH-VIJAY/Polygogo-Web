import PgSmallLocation from "@/assets/Reviews/PgSmallLocation";
import { Rate } from "antd";
export default function CustomReviews() {
  return (
    <div className="  bg-white rounded-lg p-6 mb-5 border border-[#D0D5DD] flex flex-col  items-center sm:items-start sm:flex-row gap-6">
      <img
        loading="lazy"
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="lazyload w-12 h-12 rounded-full"
      />
      <div className="flex flex-col items-center min-w-[120px] sm:items-start">
        <h2 className="text-[#2E2C34] font-semibold text-md">Zachary Parker</h2>
        <div>
          <Rate
            value={5}
            disabled
            style={{
              fontSize: "14px",
              color: "#FFA043",
              display: "flex",
              gap: "1",
              marginTop: "12px",
            }}
          />
        </div>
        <div className="flex bg-[#D0D5DD] py-2 px-2 gap-2 mt-4 justify-center items-center rounded-md w-11/12 ">
          <PgSmallLocation />
          <span className="text-xs text-[#667085]">California</span>
        </div>
      </div>
      <div>
        <div className="font-semibold text-[#2E2C34] text-md ">
          Review on Jul 14, 2022
        </div>
        <div className="text-[#98A2B3] text-[10px] my-2">
          Requested by: Jhon Doe at Jul 10, 2022
        </div>
        <p className=" font-normal text-xs text-[#667085]">
          An abosoulte great Purchase! Small and fits in my hand and it doesn't
          get in the way! I love that I can buy/download as many PS4 games as my
          heart desires and it'll be a long while before the space is field up!
        </p>
        <input
          type="text"
          name="reply"
          id="reply"
          placeholder="Write reply to Zachary Parker"
          className="w-full reviews-input mt-4 p-2  pl-6 rounded-full outline-none border-none bg-[#E4E7EC] text-xs "
        />
      </div>
    </div>
  );
}
