import Svg from "@/components/Svg";

function PgProfile() {
  return (
    <>
      <Svg width="36" height="36">
        <rect x="2" y="2" width="32" height="32" rx="16" fill="#3787FF" />
        <path
          d="M18.6667 11.334L12 19.334H18L17.3333 24.6673L24 16.6673H18L18.6667 11.334Z"
          stroke="#FCFCFD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2"
          y="2"
          width="32"
          height="32"
          rx="16"
          stroke="#008EFF"
          strokeOpacity="0.15"
          strokeWidth="4"
        />
      </Svg>
    </>
  );
}

export default PgProfile;
