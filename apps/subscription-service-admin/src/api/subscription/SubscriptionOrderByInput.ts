import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  subscriptionPlanId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
