// callback function    

function sayMyName (name) {
    name()
}

sayMyName (
    () => {
        console.log ('estou em uma call back')
    }
)