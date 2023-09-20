/* Your Code Here */
function createEmployeeRecord(arr) {
    const record = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
}

function createEmployeeRecords(employeeRecords) {
    const records = employeeRecords.map(function (record) {
        return createEmployeeRecord(record)
    })
    return records;
}

function createTimeInEvent(date) {
    const dates = date.split(" ")
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(dates[1]),
        date: dates[0],
    }
    this.timeInEvents.push(timeInObj)
    return this
}


function createTimeOutEvent(date) {
    const dates = date.split(" ");
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
    }
    this.timeOutEvents.push(timeOutObj)
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(function (e) {
        return e.date === date
    }).hour
    const timeOut = this.timeOutEvents.find(function(e) {
        return e.date === date
    }).hour
    const hoursWorked = (timeOut - timeIn)/100
    return hoursWorked;
}

function wagesEarnedOnDate(date) {
    const employeeWage = this.payPerHour
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return employeeWage * hoursWorked
}

function findEmployeeByFirstName(collection, firstName) {
    return collection.find((record) => record.firstName === firstName)
}

function calculatePayroll(records) {
    const employeesWages = records.map((e) => allWagesFor.call(e))
    return employeesWages.reduce((num1, num2) => num1 + num2)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

