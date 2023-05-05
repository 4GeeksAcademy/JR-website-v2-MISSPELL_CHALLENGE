import React from "react";

export default (props) => (
  <svg
    width={props.width || "18px"}
    height={props.height || "18px"}
    style={props.style}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5852 8.6875C16.3758 8.6875 16.1749 8.77071 16.0268 8.91882C15.8787 9.06693 15.7955 9.26781 15.7955 9.47727V15.0057C15.7955 15.442 15.442 15.7955 15.0057 15.7955H2.36932C1.93297 15.7955 1.57955 15.442 1.57955 15.0057V2.36932C1.57955 1.93297 1.93297 1.57955 2.36932 1.57955H7.89773C8.10719 1.57955 8.30807 1.49634 8.45618 1.34823C8.60429 1.20012 8.6875 0.999233 8.6875 0.789773C8.6875 0.580312 8.60429 0.37943 8.45618 0.231319C8.30807 0.0832079 8.10719 0 7.89773 0H2.36932C1.06086 0 0 1.06086 0 2.36932V15.0057C0 16.3141 1.06086 17.375 2.36932 17.375H15.0057C16.3141 17.375 17.375 16.3141 17.375 15.0057V9.47727C17.375 9.26781 17.2918 9.06693 17.1437 8.91882C16.9956 8.77071 16.7947 8.6875 16.5852 8.6875ZM17.375 0.789773V5.52841C17.375 5.73787 17.2918 5.93875 17.1437 6.08686C16.9956 6.23497 16.7947 6.31818 16.5852 6.31818C16.3758 6.31818 16.1749 6.23497 16.0268 6.08686C15.8787 5.93875 15.7955 5.73787 15.7955 5.52841V2.69628L9.32504 9.1665C9.17588 9.30925 8.97674 9.38791 8.77028 9.38564C8.56383 9.38336 8.36647 9.30032 8.22049 9.15431C8.07451 9.00831 7.99151 8.81094 7.98927 8.60448C7.98703 8.39803 8.06572 8.1989 8.2085 8.04976L14.6785 1.57955H11.8466C11.6371 1.57955 11.4362 1.49634 11.2881 1.34823C11.14 1.20012 11.0568 0.999233 11.0568 0.789773C11.0568 0.580312 11.14 0.37943 11.2881 0.231319C11.4362 0.0832079 11.6371 0 11.8466 0H16.5852C16.7947 0 16.9956 0.0832079 17.1437 0.231319C17.2918 0.37943 17.375 0.580312 17.375 0.789773Z"
      fill={props.color || "black"}
    />
  </svg>
);
