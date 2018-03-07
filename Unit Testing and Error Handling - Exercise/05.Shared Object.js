let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML = '<body>\n' +
    '    <div id="wrapper">\n' +
    '        <input type="text" id="name">\n' +
    '        <input type="text" id="income">\n' +
    '    </div>\n' +
    '</body>\n';

describe('SharedObjectTests',function () {
    beforeEach("clear fields", function () {
        $('#name').val('');
        $('#income').val('');
        sharedObject.name = null;
        sharedObject.income = null;
    });

    describe('Test initial values',function () {
        it('should return null', function () {
            expect(sharedObject.name).to.be.null;
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('Test ChangeName',function () {
        it('should not make changes', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;

            let textBoxVal = $('#name').val();
            expect(textBoxVal).to.equal('');
        });
        it('should change name', function () {
            sharedObject.changeName('pesho');
            expect(sharedObject.name).to.equal('pesho');

            let textBoxVal = $('#name').val();
            expect(textBoxVal).to.equal('pesho');
        });
    });

    describe('Test ChangeIncome',function () {
        describe('should not make changes',function () {
            it('should not make changes when string', function () {
                sharedObject.changeIncome('string');
                expect(sharedObject.income).to.be.null;

                let textBoxVal = $('#income').val();
                expect(textBoxVal).to.equal('');
            });
            it('should not make changes when not integer', function () {
                sharedObject.changeIncome(3.5);
                expect(sharedObject.income).to.be.null;

                let textBoxVal = $('#income').val();
                expect(textBoxVal).to.equal('');
            });
            it('should not make changes when zero', function () {
                sharedObject.changeIncome(0);
                expect(sharedObject.income).to.be.null;

                let textBoxVal = $('#income').val();
                expect(textBoxVal).to.equal('');
            });
            it('should not make changes when smaller than zero', function () {
                sharedObject.changeIncome(-5);
                expect(sharedObject.income).to.be.null;

                let textBoxVal = $('#income').val();
                expect(textBoxVal).to.equal('');
            });
        });
        describe('should make changes',function () {
            it('should change income to 10000', function () {
                sharedObject.changeIncome(10000);
                expect(sharedObject.income).to.equal(10000);

                let textBoxVal = $('#income').val();
                expect(textBoxVal).to.equal('10000');
            });
        });
    });

    describe('Test UpdateName',function () {
        it('should not update name', function () {
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.null;
        });
        it('should update name', function () {
            $('#name').val('pesho');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('pesho');
        });
    });

    describe('Test UpdateIncome',function () {
        describe('should not make changes',function () {
            it('should not make changes when NaN', function () {
                $('#income').val('string');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.null;
            });
            it('should not make changes when floating-point', function () {
                $('#income').val(1200.30);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.null;
            });
            it('should not make changes when zero', function () {
                $('#income').val(0);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.null;
            });
            it('should not make changes when negative', function () {
                $('#income').val(-10);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.null;
            });
        });

        describe('should make changes',function () {
            it('should update income when positive number', function () {
                $('#income').val(25000);
                sharedObject.updateIncome();
                expect(sharedObject.income).to.equal(25000);
            });
        });
    });
});