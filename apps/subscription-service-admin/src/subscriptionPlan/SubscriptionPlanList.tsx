import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SubscriptionPlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SubscriptionPlans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
