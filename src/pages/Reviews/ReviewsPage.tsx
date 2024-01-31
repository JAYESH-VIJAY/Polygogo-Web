import { Link } from "react-router-dom";
import CustomReviews from "./CustomReviews";
import ReviewForm from "./ReviewForm";

function ReviewsPage() {
  return (
    <div className="ml-3 mr-3 mt-3 ">
      <div className="flex justify-between items-center flex-wrap gap-4 ">
        <h1 className="font-semibold  text-[#344054] text-2xl stext-sm">
          Recent Reviews
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="#"
            className="border-[1.2px] border-[#263238] p-3 text-sm font-medium px-6  bg-[#FCFCFD] rounded-full "
          >
            Email Report
          </Link>
          <Link
            to="#"
            className="border  hover:bg-[#3777dd] text-sm px-6 rounded-full p-3 text-white bg-[#3787FF] border-[#3787ff]"
          >
            Send Review Invite
          </Link>
        </div>
      </div>
      <div className="lg:flex-row flex flex-col-reverse gap-4 mt-6 ">
        <div>
          <CustomReviews />
          <CustomReviews />
          <CustomReviews />
          <CustomReviews />
          <CustomReviews />
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}

export default ReviewsPage;
