
class sudoku{
  public static boolean isvalid(int[][] board,int r,int c,int option){
       for(int jj=0;jj<board.length;jj++){
          if(board[r][jj]==option){
              return false;
          }
      }
      for(int ii=0;ii<board.length;ii++){
          if(board[ii][c]==option){
              return false;
          }
      }
      for(int ii=0;ii<3;ii++){
           for(int jj=0;jj<3;jj++){
               int row=r/3*3+ii;
               int col=c/3*3+jj;

             if(board[row][col]==option){
                return false;
          }
        }
      }
       return true;
  }
  static int counter=0;
    public static void solve(int[][] board,int i,int j){
      if(i==board.length && j==0){
          counter++;
          System.out.println("********"+counter+"********");
          for(int r=0;r<board.length;r++){
           for(int c=0;c<board.length;c++){
               System.out.print(board[r][c]+" ");
           }
           System.out.println();
          }
         System.out.println("********"+counter+"********");
      }
      else if(j==board.length-1){
          if(board[i][j]!=0){
              solve(board,i+1,0);
          }
          else{
              for(int option=1;option<10;option++){
                  if(isvalid(board,i,j,option)==true){
                      board[i][j]=option;
                      solve(board,i+1,0);
                      board[i][j]=0;
              }
            }
          }
         }
      else {
          if(board[i][j]!=0){
              solve(board,i,j+1);
          }
          else{
              for(int option=1;option<10;option++){
                  if(isvalid(board,i,j,option)==true){
                      board[i][j]=option;
                      solve(board,i,j+1);
                      board[i][j]=0;
              }
            }
          }
          

          }
      }

    public static void main(String[] args){
         int[][] board = new int[][] 
    { 
            {3, 0, 6, 5, 0, 8, 4, 0, 0}, 
            {5, 2, 0, 0, 0, 0, 0, 0, 0}, 
            {0, 8, 7, 0, 0, 0, 0, 3, 1}, 
            {0, 0, 3, 0, 1, 0, 0, 8, 0}, 
            {9, 0, 0, 8, 6, 3, 0, 0, 5}, 
            {0, 5, 0, 0, 9, 0, 6, 0, 0}, 
            {1, 3, 0, 0, 0, 0, 2, 5, 0}, 
            {0, 0, 0, 0, 0, 0, 0, 7, 4}, 
            {0, 0, 5, 2, 0, 6, 3, 0, 0} 
    };
        
        solve(board,0,0);
       
    }
}
