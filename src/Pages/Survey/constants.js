import shortid from "shortid";
import { BarCodeScanner, CheckBoxList, CheckBoxListWithOther, Date, DateTime, DecimalInput, Dropdown, DropdownWithOther, Email, MapCoordinates, MultiLine, NetPromoterScore, NumberInput, NumberPoint, NumberWithCodeInput, PhoneNumber, RadioButton, RadioButtonWithOther, Rating, SingleLine, TextBox, Time, TwoColumnCheckBox } from "./Forms";

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
      name: "TextBox",
      content: <TextBox data={{
        text:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Singleline Text Input",
      name: "SingleLine",
      content: <SingleLine data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        suffix:'',
        limitTo:'',
        limitFrom:'',
        questionRequired:false,
        validationPattern:'',
        ValidationMessage:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Multiline Text Input",
      name:"MultiLine",
      content: <MultiLine data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        suffix:'',
        limitTo:'',
        limitFrom:'',
        questionRequired:false,
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number Input",
      name:"NumberInput",
      content: <NumberInput data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        suffix:'',
        limitTo:'',
        limitFrom:'',
        questionRequired:false,
        validationPattern:'',
        ValidationMessage:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number With Auto Code",
      name:"NumberWithCodeInput",
      content: <NumberWithCodeInput data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        suffix:'',
        limitTo:'',
        limitFrom:'',
        questionRequired:false,
        validationPattern:'',
        ValidationMessage:'',
        code1:'',
        from1:'',
        to1:'',
        code2:'',
        from2:'',
        to2:'',
        code3:'',
        from3:'',
        to3:'',
        code4:'',
        from4:'',
        to4:'',
        code5:'',
        from5:'',
        to5:'',
        code6:'',
        from6:'',
        to6:'',
        code7:'',
        from7:'',
        to7:'',
        code8:'',
        from8:'',
        to8:'',
        code9:'',
        from9:'',
        to9:'',
        code10:'',
        from10:'',
        to10:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Decimal Input",
      name:"DecimalInput",
      content: <DecimalInput data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        suffix:'',
        precision:'',
        limitTo:'',
        limitFrom:'',
        questionRequired:false,
        validationPattern:'',
        ValidationMessage:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Email",
      name:"Email",
      content: <Email data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        questionRequired:false,
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Phone Number",
      name:"PhoneNumber",
      content: <PhoneNumber data={{
        question:'',
        discription:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        questionRequired:false,
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Radio Button",
      name:"RadioButton",
      content: <RadioButton data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        randomizeOption:false,
        autonextDuration:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Radio Button With Other",
      name:"RadioButtonWithOther",
      content: <RadioButtonWithOther data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        randomizeOption:false,
        autonextDuration:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Drop Down",
      name:"Dropdown",
      content: <Dropdown data={{
        question:'',
        description:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        enableText:false,
        randomizeOption:false,
        autonextDuration:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Drop Down With Other",
      name:"DropdownWithOther",
      content: <DropdownWithOther data={{
        question:'',
        description:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        enableText:false,
        randomizeOption:false,
        autonextDuration:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Checkbox List",
      name:"CheckBoxList",
      content: <CheckBoxList data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        minimumOption:'',
        maximumOption:'',
        uniqueOption:'',
        checkallOption:'',
        randomizeOption:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Checkbox List With Other",
      name:"CheckBoxListWithOther",
      content: <CheckBoxListWithOther data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        minimumOption:false,
        maximumOption:false,
        uniqueOption:'',
        checkallOption:'',
        randomizeOpt:false
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "2 Columns Checkbox",
      name:"TwoColumnCheckBox",
      content: <TwoColumnCheckBox data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        option:'',
        hiddenOption:'',
        questionRequired:false,
        minimumOption:'',
        maximumOption:'',
        uniqueOption:'',
        checkallOption:'',
        randomizeOpt:false
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Number Point",
      name:"NumberPoint",
      content: <NumberPoint data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        limitTo:'',
        limitFrom:'',
        startValue:'',
        midValue:'',
        endValue:'',
        questionRequired:false,
        autoNextDuration:'',
        display:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Rating",
      name:"Rating",
      content: <Rating data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        numberOfRating:'',
        questionRequired:false,
        autoNextDuration:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Date",
      name:"Date",
      content: <Date data={{
        question:'',
        description:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        questionRequired:false,
        minDate:'',
        maxDate:'',
        autoNextDuration:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Time",
      name:"Time",
      content: <Time data={{
        question:'',
        description:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        questionRequired:false,
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Date & Time",
      name:"DateTime",
      content: <DateTime data={{
        question:'',
        description:'',
        displayTitle:'',
        variableName:'',
        questionMedia:'',
        questionRequired:false,
        autoNextDuration:''
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Net Promoter Score",
      name: "NetPromoterScore",
      content: <NetPromoterScore data={{
        question:'',
        questionMedia:'',
        displayTitle:'',
        variableName:'',
        questionRequired:false,
        startValue:'',
        midValue:'',
        endValue:'',
        autoNextDuration:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Barcode Scanner",
      name: "BarCodeScanner",
      content: <BarCodeScanner data={{
        questionRequired:false,
        disallowManual:false,
        variableName:'',
    }}/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Map Coordinates (GPS)",
      name: "MapCoordinates",
      content: <MapCoordinates data={{
        question:'',
        displayTitle:'',
        variableName:'',
        questionRequired:false,
        preventDuplicate:false
    }}/>
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