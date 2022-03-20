import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <>
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <g>
          <rect height="1" opacity=".3" width="10" x="7" y="20" />
          <rect height="1" opacity=".3" width="10" x="7" y="3" />
          <path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z M16,12h-3V8h-2v4H8l4,4L16,12z" />
        </g>
      </g>
    </>
  ),
  "SecurityUpdateTwoTone"
);
