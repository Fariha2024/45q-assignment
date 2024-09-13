/*Large Shirts: Modify the make_shirt() function so that shirts are large
 by default with a message that reads I love TypeScript. Make a large
  shirt and a medium shirt with the default message, and a shirt of any
   size with a different message.*/

   /*function make_shirt(size: number, lable: string){
    return size + lable
   }
   let modify = make_shirt(14, ` just roll`);
   console.log(modify);*/

//modify large size as default
  /* function make_shirt( lable: string, size: string = `large`){
    return size + lable
   }
   let modify = make_shirt( ` I love typescript`);
   console.log(modify);*/


   //  modify medium size as default
   /*function make_shirt( lable: string, size: string = `medium`){
    return size + lable
   }
   let modify = make_shirt( ` I love typescript`);
   console.log(modify);*/

   
   //modify any size 
   function make_shirt( lable: string, size: string){
    return size + lable
   }
   let modify = make_shirt( ` any size`, ` I love typescript`);
   console.log(modify);

