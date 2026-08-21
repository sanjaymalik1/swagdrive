const MEDIA = "https://www.bystadium.com/wp-content/uploads/2024/10";

export type UseCaseItem = {
  label: string;
  icon: string;
};

export const USE_CASE_COLUMNS: UseCaseItem[][] = [
  [
    { label: "Employee Appreciation", icon: `${MEDIA}/Employee-Appreciation-2.svg` },
    { label: "Incentives", icon: `${MEDIA}/Incentives.svg` },
    { label: "Work Anniversaries", icon: `${MEDIA}/Work-Anniversaries.svg` },
    { label: "Awards", icon: `${MEDIA}/Awards.svg` },
    { label: "Work From Home Stipend", icon: `${MEDIA}/Work-From-Home-Stipend.svg` },
  ],
  [
    { label: "Rewards Redemption", icon: `${MEDIA}/Rewards-Redemption-2.svg` },
    { label: "Employee Birthday Treats", icon: `${MEDIA}/Employee-Birthday-Treats.svg` },
    { label: "Swag Store Redemption", icon: `${MEDIA}/Swag-Store-Redemption.svg` },
    { label: "Boosting Morale", icon: `${MEDIA}/Boosting-Morale.svg` },
    { label: "Kudos Program", icon: `${MEDIA}/Peer-to-Peer-Recognition.svg` },
  ],
  [
    { label: "Swag Distribution", icon: `${MEDIA}/Swag-Distribution.svg` },
    { label: "Snack Perks", icon: `${MEDIA}/Snack-Perks.svg` },
    { label: "Recurring Perks", icon: `${MEDIA}/Recurring-Perks.svg` },
    { label: "Boosting Attendance", icon: `${MEDIA}/Boosting-Attendance.svg` },
    { label: "New Hire Welcome", icon: `${MEDIA}/New-Hire-Welcome.svg` },
  ],
  [
    { label: "Client Gifting", icon: `${MEDIA}/Client-Gifting.svg` },
    { label: "Prospecting", icon: `${MEDIA}/Prospecting-1.svg` },
    { label: "Celebration Shops", icon: `${MEDIA}/Celebration-Shops.svg` },
    { label: "Boosting Response Rates", icon: `${MEDIA}/Boosting-Response-Rates.svg` },
    { label: "Recognizing DEI Events", icon: `${MEDIA}/Recognizing-DEI-Events.svg` },
  ],
];
