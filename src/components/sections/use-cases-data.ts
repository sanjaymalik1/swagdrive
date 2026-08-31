import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Cake,
  CalendarCheck,
  CircleDollarSign,
  Cookie,
  Gift,
  HandHeart,
  HeartHandshake,
  Home,
  Package,
  PartyPopper,
  Repeat,
  Sparkles,
  Store,
  Target,
  ThumbsUp,
  Trophy,
  Users,
  UserPlus,
} from "lucide-react";

export type UseCaseItem = {
  label: string;
  Icon: LucideIcon;
};

export const USE_CASE_COLUMNS: UseCaseItem[][] = [
  [
    { label: "Employee Appreciation", Icon: HandHeart },
    { label: "Incentives", Icon: CircleDollarSign },
    { label: "Work Anniversaries", Icon: CalendarCheck },
    { label: "Awards", Icon: Trophy },
    { label: "Work From Home Stipend", Icon: Home },
  ],
  [
    { label: "Rewards Redemption", Icon: Gift },
    { label: "Employee Birthday Treats", Icon: Cake },
    { label: "Swag Store Redemption", Icon: Store },
    { label: "Boosting Morale", Icon: Sparkles },
    { label: "Kudos Program", Icon: ThumbsUp },
  ],
  [
    { label: "Swag Distribution", Icon: Package },
    { label: "Snack Perks", Icon: Cookie },
    { label: "Recurring Perks", Icon: Repeat },
    { label: "Boosting Attendance", Icon: Users },
    { label: "New Hire Welcome", Icon: UserPlus },
  ],
  [
    { label: "Client Gifting", Icon: HeartHandshake },
    { label: "Prospecting", Icon: Target },
    { label: "Celebration Shops", Icon: PartyPopper },
    { label: "Boosting Response Rates", Icon: Briefcase },
    { label: "Recognizing DEI Events", Icon: Building2 },
  ],
];
