import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ADVANCE_ITEM = "AdvanceItem"
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Text Block",
      content: "Some input"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Singleline Text Input",
      content: "Some name"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Multiline Text Input",
      content: "Some email"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number Input",
      content: "Some phone"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number With Auto Code",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Decimal Input",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Email",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Phone Number",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Radio Button",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Radio Button With Other",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Drop Down",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Drop Down With Other",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Checkbox List",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Checkbox List With Other",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "2 Columns Checkbox",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number Point",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Rating",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Date",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Time",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Date & Time",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Net Promoter Score",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Map Coordinates (GPS)",
      content: "Some image"
    }
  }
];


export const Advance_Item = [
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Photo Capture",
      content: "Some input"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Signature",
      content: "Some name"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Radio Button With Text",
      content: "Some email"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Dropdown Grid",
      content: "Some phone"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Dropdown With Other Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Singleline Text Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Number Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Decimal Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Radio Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Radio Button With Other",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Checkbox With Text",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "NPS Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Checkbox Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Checkbox Grid With Other",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Number point Grid",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Ranking",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Ranking-Checkbox",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "NSEC",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "SEC",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Rural SEC",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Cascade Options",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Contact Form",
      content: "Some image"
    }
  },
  {
    id: shortid.generate(),
    type: ADVANCE_ITEM,
    component: {
      type: "Address",
      content: "Some image"
    }
  }
];