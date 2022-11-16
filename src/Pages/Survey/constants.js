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