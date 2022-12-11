/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * UNIT TEST dealerShouldDraw function
 */

describe('Test for the BlackJack Game', () => {
    for (let i = 0; i < 10; i++) {
        describe('Test the dealerShouldDraw Method', () => {
            it('should return correct boolean result', () => {
                expect(dealerShouldDraw([{ val: 10, displayVal: '10', suit: 'hearts' }, { val: 9, displayVal: '9', suit: 'hearts' }])).toBeFalsy();
                expect(dealerShouldDraw([{ val: 1, displayVal: 'Ace', suit: 'hearts' }, { val: 6, displayVal: '6', suit: 'hearts' }])).toBeTruthy();
                expect(dealerShouldDraw([{ val: 10, displayVal: '10', suit: 'hearts' }, { val: 6, displayVal: '6', suit: 'diamonds' }, { val: 1, displayVal: 'Ace', suit: 'clubs' }])).toBeFalsy();
                expect(dealerShouldDraw([{ val: 2, displayVal: '2', suit: 'hearts' }, { val: 4, displayVal: '4', suit: 'diamonds' }, { val: 2, displayVal: '2', suit: 'clubs' }, { val: 5, displayVal: '5', suit: 'clubs' }])).toBeTruthy();
            })
        }) //end test getTotalPoints Method
    }//end for loop
}) //end test Black Jack Game