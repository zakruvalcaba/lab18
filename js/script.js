function view(employees) {
    let i = 1; // COUNTER THAT APPEARS BEFORE EMPLOYEE NAME
    // LOOP THROUGH EMPLOYEE ARRAY
    for (let employee of employees) {
        console.log(`${i}. ${employee}`);
        i++; // INCREMENT COUNTER
    }
    console.log('');
}

function add(employees) {
    let name = prompt('Enter the employee\'s name');
    let title = prompt('Enter the employee\'s title');
    employees.push(`${name} (${title})`);
    console.log(`${name} was successfully added.`);
    console.log('');
}

function del(employees) {
    let num = parseInt(prompt('Enter employee number to delete'));
    if (num < 1 || num > employees.length) {
        alert('Invalid employee number.');
    } else {
        let employee = employees.splice(num - 1, 1);
        console.log(`${employee} was successfully deleted.`);
        console.log('');
    }
}

function main() {
    // DISPLAY THE COMMAND MENU
    console.log('The Employee Management Appplication');
    console.log('------------------------------------');
    console.log('COMMAND MENU');
    console.log('show - Show all employees');
    console.log('add  - Add an employee');
    console.log('del  - Delete an employee');
    console.log('exit - Exit the application');
    console.log('------------------------------------');
    console.log('');
    // START WITH AN EMPTY ARRAY
    let arrEmployees = [];
    // FETCH THE JSON DATA
    fetch('../data/employees.json')
        .then( response => response.json() )
        .then( data => {
            for (let employee of data.employees) {
                arrEmployees.push(`${employee.name} (${employee.title})`);
            }
            // KEEP USER AT SELECTING A COMMAND
            while(true) {
                // ALLOW THE USER TO ENTER A COMMAND
                let command = prompt('Enter command');
                // CHECK TO MAKE SURE COMMAND IS NOT NULL (CANCEL)
                if (command !== null) {
                    command = command.toLowerCase();
                    if (command === 'show') {
                        view(arrEmployees);
                    } else if (command === 'add') {
                        add(arrEmployees);
                    } else if (command === 'del') {
                        del(arrEmployees);
                    } else if (command === 'exit') {
                        break;
                    } else {
                        alert('That is not a valid command');
                    }
                } else {
                    alert('Please enter a command.');
                }
            }
            console.log('The program has been terminated.');
        } )
        .catch( error => console.log(error.message) );
}
main();