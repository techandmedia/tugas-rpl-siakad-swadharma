import React, { useEffect, useState } from "react";

export default function UserPage() {
  const listMenu = [
    { route: "fo-reception", name: "Front Office Reception", logo: "SampleLogo" },
    { route: "fo-cashier", name: "Front Office Cashier", logo: "SampleLogo" },
    { route: "sales-marketing", name: "Sales Marketing", logo: "SampleLogo" },
    {
      route: "tel-operator",
      name: "Telephone Operator",
      logo: "SampleLogo"
    },
    {
      route: "housekeeping",
      name: "Housekeeping",
      // component: (
      //   <Housekeeping
      //     setDefaultIconColor={setDefaultIconColor}
      //     setScreenTitle={setScreenTitle}
      //   />
      // ),
      logo: "SampleLogo"
    },
    { route: "pos", name: "Point of Sales", logo: "SampleLogo" },
    { route: "banquet", name: "Banquet", logo: "SampleLogo" },
    { route: "restaurant", name: "Restaurant", logo: "SampleLogo" },
    { route: "acc-receive", name: "Accounts Receivable", logo: "SampleLogo" },
    { route: "purchasing", name: "Purchasing", logo: "SampleLogo" },
    { route: "inventory", name: "Inventory", logo: "SampleLogo" },
    { route: "acc-payable", name: "Accounts Payable", logo: "SampleLogo" },
    { route: "gen-cashier", name: "General Cashier", logo: "SampleLogo" },
    { route: "gen-ledger", name: "General Ledger", logo: "SampleLogo" },
    { route: "fix-assets", name: "Fixed Assets", logo: "SampleLogo" },
    { route: "engineering", name: "Engineering", logo: "SampleLogo" }
  ];

  // useEffect(() => {
  //   setComponent(getRoute());
  // }, []);

  // function getRoute() {
  //   for (let i = 0; i < listMenu.length; i++) {
  //     if (route === listMenu[i].route) {
  //       return listMenu[i].component;
  //     }
  //   }
  // }

  return <h1>UserPage</h1>;
}
