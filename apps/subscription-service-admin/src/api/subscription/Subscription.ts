import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";
import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  subscriptionPlan?: SubscriptionPlan | null;
  updatedAt: Date;
  user?: User | null;
};
