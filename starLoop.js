let n = 4;
//this loop is for row
for(i=0; i < n; i++){
    let row = ' ';
    //

    // this loop is for column
    for(j=0; j < n-1; j++){
        row = row + ' * '
    }
    console.log(row)
}