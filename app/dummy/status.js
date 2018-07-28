export const Scholarships = {
    Approval: { key: 0, text: "Approval" },
    Reject: { key: 1, text: "Reject" },
    Pending: { key: 2, text: "Pending" }
  };
  
  
  export const PositionTypes = {
    staft: 'Staff',
    english_teacher: 'English Program',
    academic_teacher: 'Academic Program'
  }
  export const Gender = [
    { key: '1', text: 'Male' },
    { key: '2', text: 'Female' },
    { key: '3', text: 'Other' },
  ]
  
  export const Roles = [
    { key: '0', text: 'General' },
    { key: '1', text: 'Admin' },
    { key: '2', text: 'Cashier' },
    { key: '3', text: 'Testing' },
    { key: '4', text: 'EPO' },
    { key: '5', text: 'APO' },
    { key: '6', text: 'Scholarship' },
    { key: '7', text: 'Enrollment' },
    { key: '8', text: 'HR' },
    { key: '7', text: 'Registrar' },
    { key: '8', text: 'Facultie' },
  ]
  
  export const ViewOptions = {
    sort: [{ column: 'name', type: 'asc' }],
    view: [{ type: 'table' }],
    page: [{ total: 50 }]
  }
  
  export const ProgramTypes = [
    { key: 1, text: 'English Program' },
    { key: 2, text: 'Academic Program' },
  ]
  
  export const ProgramTypesFilter = [
    { key: 0, text: 'All' },
    { key: 1, text: 'English Program' },
    { key: 2, text: 'Academic Program' },
  ]
  
  export const InstituteTypes = [
    { key: 1, text: 'General Program' },
    { key: 2, text: 'Academic Program' },
  ]
  
  export const InstituteTypesObj = {
    general: { key: 1, text: 'General Program' },
    academic: { key: 2, text: 'Academic Program' },
  }
  
  export const InstituteTypesFilter = [
    { key: 0, text: 'All' },
    { key: 1, text: 'General Program' },
    { key: 2, text: 'Academic Program' },
  ]
  
  export const ProgramTypesObj = {
    englishProgram: { key: 1, text: 'English Program', status: 'Active' },
    academicProgram: { key: 2, text: 'Academic Program', status: 'Active' },
  }
  
  export const TermStatus = [
    { key: 1, text: 'Pending' },
    { key: 2, text: 'Active' },
    { key: 3, text: 'Close' },
  ]
  export const daysOfWeek = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
  }
  export const paymentType = {
    cash: { key: 1, text: 'Cash' },
    wingMerchant: { key: 2, text: 'Wing Merchant' },
    ePayment: { key: 3, text: 'Wing E-Payment' },
  }
  
  export const PaymentTypes = [
    { key: 1, text: 'Cash' },
    { key: 2, text: 'Wing Merchant' },
    { key: 3, text: 'Wing E-Payment' },
  ]
  
  export const InvoiceTypes = [
    { key: 1, text: 'Testing' },
    { key: 2, text: 'School Fee' },
    { key: 3, text: 'Short Course' },
  ]
  
  export const InvoiceTypesObj = {
    testing: { key: 1, text: 'Testing' },
    schoolFee: { key: 2, text: 'School Fee' },
    shortCoure: { key: 3, text: 'Short Course' },
  }
  
  export const programs = [
    { key: 1, text: 'Undergraduate' },
    { key: 2, text: 'Graduate' },
    { key: 3, text: 'Postgraduate' },
    { key: 4, text: 'English Program' },
    { key: 5, text: 'Association' },
    { key: 6, text: 'Short Course' },
    { key: 7, text: 'Others' },
  ]
  
  export const programsObj = {
    Undergraduate: { key: 1, text: 'Undergraduate' },
    Graduate: { key: 2, text: 'Graduate' },
    Postgraduate: { key: 3, text: 'Postgraduate' },
    English_Program: { key: 4, text: 'English Program' },
    Association: { key: 5, text: 'Association' },
    Short_Course: { key: 6, text: 'Short Course' },
    Others: { key: 7, text: 'Others' },
  }
  
  export const courses = [
    { key: 1, text: 'Foundation Year Courses' },
    { key: 2, text: 'Oriented Courses by Faculty Requirements' },
    { key: 3, text: 'Functional Skills Courses' },
    { key: 4, text: 'Institutional Skills Courses' },
    { key: 5, text: 'Basic Major Courses' },
    { key: 6, text: 'Major Courses' },
    { key: 7, text: 'Elective Courses' },
    { key: 8, text: 'Graduation Path' },
  ]
  export const reportFilterBy = [
    { key: 1, text: 'Custom' },
    { key: 2, text: 'Today' },
    { key: 3, text: 'This Month' },
    { key: 4, text: 'This Year' },
  ]
  
  export const filterTrueFalse = [
    { key: 1, text: 'All' },
    { key: 2, text: 'Paid' },
    { key: 3, text: 'Unpaid' },
  ]
  
  export const priorities = [
    { key: 1, text: 'Required' },
    { key: 2, text: 'Elective' },
  ]
  
  export const curriculumStatus = [
    { key: 1, text: 'Acitve' },
    { key: 2, text: 'Disabled' },
  ]
  export const SubjectType = [
    { key: 1, text: 'Admission and Services Fee' },
    { key: 2, text: 'Short Courses' },
    { key: 3, text: 'Major Courses' },
    { key: 4, text: 'English Courses' },
  ]
  export const Days = [
    { key: 1, name: 'Monday' },
    { key: 2, name: 'Tuesday' },
    { key: 3, name: 'Wednesday' },
    { key: 4, name: 'Thursday' },
    { key: 5, name: 'Friday' },
    { key: 6, name: 'Saturday' },
    { key: 7, name: 'Sunday' },
  ]
  export const ShiftStatus = [
    { key: 1, name: 'Opening' },
    { key: 2, name: 'Closed' },
  ]
  export const ShiftStatusObj = {
    opening: { key: 1, name: 'Opening' },
    closed: { key: 2, name: 'Closed' },
  }
  
  export const TestFeeStatus = {
    unpaid: { key: 1, name: 'Unpaid' },
    paid: { key: 2, name: 'Paid' },
    prepaid: { key: 3, name: 'Prepaid' },
    void: { key: 4, name: 'Void' },
  }
  
  export const EmployeeType = {
    staff: { key: 'Staff' },
    englishInstructor: { key: 'General Program' },
    academicInstructor: { key: 'Academic Program' }
  }
  
  export const DiscountPolicy = [
    { key: 1, name: 'Monk' },
    { key: 2, name: 'Staff' },
  ]
  export const TranscriptStatus = {
    blank: { key: 1, name: 'Blank' },
  }
  
  export const UserRoles = [
    { key: 0, text: 'Administrator' },
    { key: 1, text: 'Testing Center' },
    { key: 2, text: 'Aministration Officer' },
    { key: 3, text: 'Enrollment' },
    { key: 4, text: 'Cashier' },
    { key: 5, text: 'Academic Program' },
    { key: 6, text: 'Faculties' },
    { key: 7, text: 'Institutes and Centers' },
    { key: 8, text: 'Registra Officer' },
    { key: 9, text: 'Scholarships' },
    { key: 10, text: 'Payroll & Finances' },
    { key: 11, text: 'Human Resources' },
  ]
  
  export const SchoolSession = [
    { key: 1, text: 'Morning' },
    { key: 2, text: 'Afternoon' },
    { key: 3, text: 'Evening' },
    { key: 4, text: 'Weekend' },
  ]
  
  export const TestingStatus = {
    active: { key: 1, text: 'Active' },
    disables: { key: 2, text: 'Disabled' },
    expired: { key: 3, text: 'Expired' },
  }
  
  export const EnrollStatus = {
    none: { key: 1, text: 'none' },
    add: { key: 2, text: 'Add' },
    change: { key: 3, text: 'Changed' },
    drop: { key: 4, text: 'Dropped' },
  }
  
  export const AttendanceStatus = {
    attended: { key: 1, text: 'Attended' },
    absent: { key: 2, text: 'Absent' },
    change: { key: 3, text: 'Changed' },
    drop: { key: 4, text: 'Dropped' },
  }
  
  export const TranscriptGradeStatus = {
    passed: { key: 1, text: 'Passed', short: 'P' },
    fail: { key: 2, text: 'Failed', short: 'F' },
  }
  