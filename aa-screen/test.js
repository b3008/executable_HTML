

console.log("hey");




describe('aa-screen', () => {

    describe('instance', function () {


       
       
        it('should have properties', function (done) {

            screen = document.createElement('aa-screen');
          

            document.body.appendChild(screen);
           
           
          screen.name = "lala"
            console.log("hi");
          
             
            done();
        });
    })
})


