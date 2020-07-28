export const menuContent = [
    {
      icon: "ion ion-md-speedometer",
      label: "Dashboard",
      to: "/dashboard"
    },
    // {
    //   icon: "ion ion-md-pin",
    //   label: "Restaurant Map View",
    //   to: "/map-view"
    // },
    {
      icon: "ion ion-md-business",
      label: "Menu management",
      content: [
        {
          label: "Menu Categories",
          to: "/menu-categories"
        },
        {
          label: "Item list",
          to: "/item-list"
        }
      ]
    },
    {
      icon: "fas fa-history",
      label: "Order history",
      to: "/order-history"
  
    },
    {
      icon: "ion ion-md-clipboard",
      label: "Reports",
      to: "/reports"
    },
    {
      icon: "fas fa-cogs",
      label: "Management",
      content: [
        {
          label: "Coupon Code/Offers ",
          to: "/coupon"
        },
        {
          label: "SEO",
          to: "/seo"
        }
      ]
    },
    {
      icon: "fas fa-file-invoice",
      label: "Invoices",
      to: "invoices"
    },
    {
      icon: "ion ion-ios-settings",
      label: "Settings",
      content: [
        {
          label: "Contact details",
          to: "/contact-details"
        },
        {
          label: "Store detail",
          to: "/store-detail"
        },
        {
          label: "Delivery detail",
          to: "/delivery-detail"
        }
        ,
        {
          label: "Commission info",
          to: "/commission-info"
        }
      ]
    },
    {
      icon: "fas fa-question-circle",
      label: "FAQ",
      to: "/faq"
    }
  ];