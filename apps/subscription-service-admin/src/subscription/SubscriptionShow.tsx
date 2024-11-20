import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="SubscriptionPlan"
          source="subscriptionplan.id"
          reference="SubscriptionPlan"
        >
          <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
