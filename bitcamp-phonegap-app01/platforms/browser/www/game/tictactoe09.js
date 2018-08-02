const human = 1,
      computer = 10,
      cellBox = $('#cell-box'),
      cells = $('.cell'),
      cellData = [0,0,0,0,0,0,0,0,0];
var count = 0,
    isCompleted = false,
    isWorking = false;

$('#cell-box').on('complete', (e, result) => {
    setTimeout(() => {
        if (result == 3) alert("인간 승!");
        else if (result == 30) alert("컴퓨터 승!");
        else if (count == 5)alert('비겼다');
    }, 500);
});

$('.cell').click((e) => {
    var cell = $(e.target);
    var no = parseInt(cell.attr('data-no'));
    if (isCompleted || isWorking) return;
    if (cellData[no] > 0) return;
        
    cell.addClass('cell-x');
    cellData[no] = human; //사람
    count++;
    
    computeGame();
   
    if (isCompleted) return;
    
    // 타이머를 가동하여 1초 후에 컴퓨터가 표시하게 한다.
    isWorking = true;
    setTimeout(() => {
        while (true) {
            var no = Math.floor(Math.random() * 9);
            if (!isCellChecked(no)) {
                checkCell(no, 'computer');
                break;
            }
        }
        
        computeGame();

    }, 1000);
});

$('#new-game').click((e) => {
    cells.text('').removeClass('cell-x').removeClass('cell-o');
    count = 0;
    isCompleted = false;
    isWorking = false;
    for (var i in cellData) {
        cellData[i] = 0;
    }
});

function isCellChecked(no) {
    return cellData[no] > 0;
}

function checkCell(no, gamer) {
    $(cells[no]).addClass(gamer == 'computer' ? 'cell-o' : 'cell-x');
    cellData[no] = (gamer == 'computer') ? 10 : 1;
}

function computeGame() {
    var sum = 0;
    console.log("-----------------");
    for (var row = 0; row < 9; row += 3) {
        for (var i = row; i < (row + 3); i++) {
           sum += cellData[i];
        }
        if (isGameOver(sum)) return true;
        console.log('sum = ', sum);
    }
    
    sum = 0;
    for (var col = 0; col < 3; col++) {
        for (var i = col; i <= (col + 6); i += 3) {
            sum += cellData[i];
        }
        if (isGameOver(sum)) return true;
        console.log('sum = ', sum);
    }
    
    sum = 0;
    for (var i = 0; i <= 8; i += 4) {
        if (cells[i].innerHTML == human) countHuman++;
        else if (cells[i].innerHTML == computer) countComputer++;
    }
    if (isGameOver(sum)) return true;
    console.log('sum = ', sum);
    
    sum = 0;
    for (var i = 2; i <= 6; i += 2) {
        if (cells[i].innerHTML == human) countHuman++;
        else if (cells[i].innerHTML == computer) countComputer++;
    }
    if (isGameOver(sum)) return true;
    console.log('sum = ', sum);
    
    return 0;
}



function isGameOver(result) {
    if (result ==3 || result == 30 || count == 5) {
        cellBox.trigger('complete', [result]);
        isCompleted = true;
        return true;
    }
    return false;
}





