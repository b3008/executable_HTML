describe('aa-session', () => {

    describe('instance', function () {


        it('should find session', function (done) {

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


