import { InputJsonValue } from "../../types";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  username?: string;
};
