describe('aa-screen', () => {

    describe('instance', function () {


        it('should find screen1', function (done) {

            let screen1 = document.querySelector('#screen1');
            if(screen1.tagName=="AA-SCREEN")
            {
                done();
            }

        });

        it('screen1 should have a name set', function(done){
            
            let screen1 = document.querySelector('#screen1');
            if(screen1.name=="first")
            {
                done();
            }
        })
    })
})


