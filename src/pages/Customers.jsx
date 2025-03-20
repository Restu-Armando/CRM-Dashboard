import React from "react";
import CustomerTable from "../components/CustomerTable";

const Customers = () => {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-6 p-4">
      {/* Card Stats - Full Width & Scrollable */}
      <div className="col-span-full overflow-x-auto scrollbar-hide p-2">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customers;
