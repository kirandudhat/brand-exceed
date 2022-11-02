const LeaveFormModel = {

    reason: {
        name: "reason",
        label: "Reason Name*",
        requiredErrorMsg: "Reason Name Type is required",
    },
    from_date: {
        name: "from_date",
        label: "From Date*",
        requiredErrorMsg: "From Date Type is required",
    },
    to_date: {
        name: "to_date",
        label: "To Date*",
        requiredErrorMsg: "To Date Type is required",
    },
    leave_type: {
        name: "leave_type",
        label: "Leave Type*",
        requiredErrorMsg: "Leave Type is required",
    },
    user_id: {
        name: 'user_id',
        label: 'User ID*',
        requiredErrorMsg: "User ID is required",
    },
    slot: {
        name: 'slot',
        label: 'User ID*',
        requiredErrorMsg: "Slot is required",
    },
    count: {
        name: 'count',
        label: 'User ID*',
        requiredErrorMsg: "Count is required",
    },
    sickleave: {
        name: 'sickleave',
        label: 'sick Leave*',
        requiredErrorMsg: "Sick Leave is required",
    },
}
export default LeaveFormModel;