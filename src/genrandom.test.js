import {expect} from 'chai';
import {rNumber, rNumChar, rChar} from './genrandom';


    describe('rNumber', function(){
        it('should return a random number', function(){
            expect(rNumber(3)).to.be.ok;

        });
    });

    describe('rNumChar', function(){
        it('should return a random string with numbers and letters', function(){
            expect(rNumChar(5)).to.be.ok;

        });
    });

    describe('rChar', function(){
        it('should return a string of letters with no numbers', function(){
            let length = 5;
            let containsANumber = false;
            let randomCharacters = rChar(length);

            for( var i = 0; i < randomCharacters.length ; i++){

                if(!isNaN(Number(randomCharacters[i]))){
                    containsANumber = true;
                }
            }
            expect(containsANumber).to.be.false;

        });
    });