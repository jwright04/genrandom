import {expect} from 'chai';
import {rNumber, rNumChar} from './genrandom';


    describe('rNumber', function(){

        it('should return a random number', function(){
            expect(rNumber(3)).to.be.ok;

        });
    });

    describe('rNumChar', function(){

        it('should return a random number', function(){
            expect(rNumChar(5)).to.be.ok;

        });
    });