class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //for row
        for(let i=0;i<9;i++){
            let hashRow = {}
            for(let j=0;j<9;j++){
                if(board[i][j]==='.') continue;
                else {
                    if(board[i][j] in hashRow){
                        return false;
                    } else hashRow[board[i][j]] = 1
                }
            }
            console.log("hashRow : ",i," ",hashRow)
        }

        console.log("-------------")

        // for column
        for(let i=0;i<9;i++){
            let hashColumn = {}
            for(let j=0;j<9;j++){
                if(board[j][i]==='.') continue;
                else {
                    if(board[j][i] in hashColumn){
                        return false
                    } else hashColumn[board[j][i]] = 1
                }
            }
            console.log("hashCol : ", hashColumn)
        }

        console.log("-----------")

        //for 3*3 squares

        let hashSquare = new Map()
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]==='.') continue;
                else {
                    let key = [Math.floor(i/3),Math.floor(j/3)]

                    if(hashSquare.has(JSON.stringify(key))){
                        console.log(key,":",hashSquare.get(JSON.stringify(key)))
                        if(hashSquare.get(JSON.stringify(key)).includes(board[i][j])) return false
                        else hashSquare.get(JSON.stringify(key)).push(board[i][j])
                    } else {
                        hashSquare.set(JSON.stringify(key),[board[i][j]])
                    }
                }
            }
        }

        console.log(hashSquare)

        return true
    }
}
