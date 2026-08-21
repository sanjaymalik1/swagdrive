export function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="size-5 shrink-0"
    >
      <path
        d="M18.333 9.233V10a8.333 8.333 0 1 1-4.942-7.617"
        stroke={color}
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.333 3.333 10 11.675l-2.5-2.5"
        stroke={color}
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="size-4"
    >
      <path
        d="M4 6.5 8 10.5 12 6.5"
        stroke="#4F5052"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconClass = "size-[34px] min-[768px]:size-8 min-[1025px]:size-[38px]";

export function ShopsTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M9.571 25.261a2.535 2.535 0 0 0 1.819-.765 2.653 2.653 0 0 0 .753-1.848 2.653 2.653 0 0 0 .753 1.848c.239.242.522.435.834.566a2.535 2.535 0 0 0 2.803-.566 2.621 2.621 0 0 0 .753-1.849 2.65 2.65 0 0 0 .753 1.849c.239.242.522.435.834.566a2.535 2.535 0 0 0 2.802-.566c.24-.243.429-.531.558-.848a2.65 2.65 0 0 0 .196-1 2.653 2.653 0 0 0 .753 1.848c.239.242.522.435.834.566a2.534 2.534 0 0 0 2.802-.566c.24-.243.428-.531.558-.848.129-.317.195-.657.195-1a2.65 2.65 0 0 0 .754 1.848c.238.242.522.435.834.566a2.535 2.535 0 0 0 2.802-.566c.239-.243.428-.531.558-.848a2.65 2.65 0 0 0 .195-1 2.653 2.653 0 0 0 .753 1.848c.24.242.523.435.835.566a2.534 2.534 0 0 0 2.802-.566 2.653 2.653 0 0 0 .753-1.848 2.653 2.653 0 0 0 .753 1.848c.24.242.523.435.834.566.313.132.647.2.985.2m-30.858 0a2.568 2.568 0 0 1-1.818-.766A2.652 2.652 0 0 1 7 22.648v-3.1l5.143-5.415h8.118M9.571 25.26V43H29.16m11.27-17.739c.337 0 .672-.067.984-.199.312-.13.595-.324.834-.566A2.62 2.62 0 0 0 43 22.647v-3.1l-5.339-5.414H29.16m11.27 11.128V43h-4.703M20.262 14.133V9.427h4.449m-4.449 4.706v4.593h4.449m-4.449-4.593h4.449m4.449 0V9.427H24.71m4.449 4.706v4.593H24.71m4.449-4.593H24.71m0 0V9.427m0 4.706v4.593m0-9.299L22.429 7m2.281 2.427L26.818 7m2.34 36V29.668h6.569V43m-6.568 0h6.568M13.73 29.668v8.739h10.98v-8.739H13.73z"
        stroke="#8D12E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GiftingTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M8 12.5h22v17.5H8V12.5Z"
        stroke="#00C036"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.5h22v3.2H8V12.5ZM19 12.5v17.5"
        stroke="#00C036"
        strokeWidth="1.6"
      />
      <path
        d="M19 12.5 14.2 7.8a2.6 2.6 0 1 0-3.6 3.7L19 12.5ZM19 12.5l4.8-4.7a2.6 2.6 0 1 1 3.6 3.7L19 12.5Z"
        stroke="#00C036"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M25.5 10.5 28 18h8l-6.5 4.7 2.5 7.8-7-4.7-7 4.7 2.5-7.8L14.5 18h8l2.5-7.5Z"
        fill="#0B7AFC"
      />
      <path
        d="m16 33 4.5-8 5 .8 2.2 2.5.4 2-2.4 5.4-3.3-2.2-4.1 2.2L16 33ZM35.5 33 31 25.2l-4.2.7-2.8 2.4-.4 2 1.7 5.5 3.2-2.1 3.8 1.9 3.2-2.6Z"
        fill="#0B7AFC"
      />
    </svg>
  );
}

export function EventsTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M8.5 11h34v21H38M8.5 11V8.5M8.5 11h7.5M16 8.5V14M21 8.5V14M26 8.5V14M31 8.5V14M36 8.5V14"
        stroke="#FFB800"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 35.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM40.5 35.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM25.5 31.5a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z"
        stroke="#FFB800"
        strokeWidth="2"
      />
      <path
        d="M13.5 41.5v-3a5 5 0 0 1 5-5M37.5 41.5v-3a5 5 0 0 0-5-5M18.5 41.5h14"
        stroke="#FFB800"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m25.5 17.5 1 2.7h2.8l-2.3 1.6.9 2.6-2.4-1.6-2.4 1.6.9-2.6-2.3-1.6h2.8l1-2.7Z"
        stroke="#FFB800"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function KudosTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <circle cx="33.5" cy="17.5" r="8.5" stroke="#FF5B77" strokeWidth="1.8" />
      <circle cx="17.5" cy="33.5" r="8.5" stroke="#FF5B77" strokeWidth="1.8" />
      <circle cx="33.5" cy="14.8" r="1.8" fill="#FF5B77" />
      <path
        d="M30.2 20.2c1.8 1.6 4.8 1.6 6.6 0"
        stroke="#FF5B77"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="30.8" r="1.8" fill="#FF5B77" />
      <path
        d="M14.2 36.2c1.8 1.6 4.8 1.6 6.6 0"
        stroke="#FF5B77"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="m38.5 32.2 3.5 3.5M12.5 18.8 9 15.3"
        stroke="#FF5B77"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SwagTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M20 10.5h11l5 5.5v10.5H26.5V26h-2v.5H15V16l5-5.5Z"
        stroke="#00C036"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 10.5v4.8c0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2v-4.8"
        stroke="#00C036"
        strokeWidth="1.7"
      />
      <path
        d="M12 18.5h10.5v24H14.2A2.2 2.2 0 0 1 12 40.3V18.5Z"
        stroke="#00C036"
        strokeWidth="1.7"
      />
      <path
        d="M24.5 31h13.5v8.2a3.6 3.6 0 0 1-3.6 3.6h-6.3a3.6 3.6 0 0 1-3.6-3.6V31Z"
        stroke="#00C036"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function SnacksTabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 51"
      fill="none"
      className={iconClass}
      aria-hidden
    >
      <path
        d="M10 8.5h31v3H10v-3ZM10 39.5h31v4H10v-4Z"
        fill="#0B7AFC"
      />
      <path
        d="M12.5 14.5 10 11.5M38.5 14.5 41 11.5M12.5 36.5 10 39.5M38.5 36.5 41 39.5M12.5 14.5v22M38.5 14.5v22"
        stroke="#0B7AFC"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22 19.5c3.8-.4 6.8 2.2 7.4 5.6.6 3.4-2.4 6.4-6.4 6.8-2.8.3-5.4-1.2-6.2-3.5-.8-2.4.4-4.6 2.4-5.2"
        stroke="#0B7AFC"
        strokeWidth="1.6"
      />
      <path
        d="M24.5 28.5c3.2.8 6.3-.6 7.6-3.2 1.4-2.6.2-5.3-2.4-6.2"
        stroke="#0B7AFC"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function OfferingsTabIcon({ id }: { id: string }) {
  switch (id) {
    case "shops":
      return <ShopsTabIcon />;
    case "gifting":
      return <GiftingTabIcon />;
    case "service":
      return <ServiceTabIcon />;
    case "events":
      return <EventsTabIcon />;
    case "kudos":
      return <KudosTabIcon />;
    case "swag":
      return <SwagTabIcon />;
    case "snacks":
      return <SnacksTabIcon />;
    default:
      return null;
  }
}
