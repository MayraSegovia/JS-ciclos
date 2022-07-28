let totalAlumnos = 0
for(let i = 0; i < 5; i++){
    let addedStudent = true;
    do{
    const name = prompt('ingrese el nombre del alumno: ');
    let exit = true;
    while(exit){
        const age = prompt('Ingrese la edad de ' + name + ': ');
        if(age < 18){
            const question = prompt('La edad ingresada es correcta? Y/N')
            if(question === 'Y'){
            alert('La edad minima es de 18, lamentablemente' + name + ' no puede inscribirse');
            exit = false;
            }    
        }else{
            totalAlumnos++
            exit = false;
            addedStudent = false;
        }}}while(addedStudent)
}
alert('el aula se lleno con un total de ' + totalAlumnos + ' alumnos');