interface PageHeadingTypes {
  title: string;
  content?: string;
  isShowContent?: boolean;
  isDark?: boolean;
}
function PageHeading({
  title,
  content,
  isShowContent = true,
  isDark = true,
}: PageHeadingTypes) {
  return (
    <>
      <div>
        <h3
          className={`mb-1 text-2xl font-semibold text-gray-700 ${
            !isDark && "text-white"
          }`}
        >
          {title}
        </h3>
        {isShowContent && (
          <p className={`text-sm text-gray-500 ${!isDark && "text-[#CAD2C5]"}`}>
            {content}
          </p>
        )}
      </div>
    </>
  );
}

export default PageHeading;
