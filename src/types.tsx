import { ReactNode } from "react";

export interface PlanType {
  emoji: string;
  plan: string;
  shortDescription: ReactNode | string;
  type: string;
  isPopular?: boolean;
  isActive?: boolean;
}
