let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = function (selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};

describe('ArmageDomTests',function () {
    beforeEach(function () {
        document.body.innerHTML = '<body>\n' +
            '<div id="target">\n' +
            '    <div class="nested target">\n' +
            '        <p>This is some text</p>\n' +
            '    </div>\n' +
            '    <div class="target">\n' +
            '        <p>Empty div</p>\n' +
            '    </div>\n' +
            '    <div class="inside">\n' +
            '        <span class="nested">Some more text</span>\n' +
            '        <span class="target">Some more text</span>\n' +
            '    </div>\n' +
            '</div>\n' +
            '</body>\n';
    });

    describe('should not change html',function () {
        it('when we have 1 valid and 1 invalid selector', function () {
            let selector1 = $('.inside');
            let selector2 = 2;
            let oldHtml = selector1.html();
            nuke(selector1,selector2);
            expect(selector1.html()).to.equal(oldHtml);
        });
        it('when we have 2 invalid selectors', function () {
            let selector1 = 3;
            let selector2 = 2;
            let oldHtml = $('body').html();
            nuke(selector1,selector2);
            expect($('body').html()).to.equal(oldHtml);
        });
        it('when we have same selectors', function () {
            let selector1 = $('.inside');
            let oldHtml = $('body').html();
            nuke(selector1,selector1);
            expect($('body').html()).to.equal(oldHtml);
        });
        it('when 2 valid selectors but they dont change anything', function () {
            let selector1 = $('.nested');
            let selector2 = $('.inside');
            let oldHtml = $('body').html();
            nuke(selector1,selector2);
            expect($('body').html()).to.equal(oldHtml);
        });
    });

    describe('should change html',function () {
        it('when 2 valid selectors', function () {
            let selector1 = $('.nested');
            let selector2 = $('.target');
            let oldHtml = $('body').html();
            nuke(selector1,selector2);
            expect($('body').html()).to.not.equal(oldHtml);
        });
    });
});