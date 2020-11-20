import {Boxer} from './static/classes/boxer.class.js'
//import {Game} from './static/classes/game.class.js'
//import {GameSingle} from './static/classes/game.single.class.js';
//import {GameMultiplayer} from './static/classes/game.multiplayer.class.js';
//import {BlueBoxer} from './static/classes/classes.js';
import * as assert from 'assert'

before(function() { console.log("Начало тестов King of the Ring"); });
after(function() { console.log("Конец тестов King of the Ring"); });
describe("Classes test", () => {
    describe("Boxer test", () => {
        describe("setState()", () => {    
            it('Задаем свойство action', () => {
                let b = new Boxer();
                b.setState({action: 'BLOCK'});
                assert.strictEqual(b.state.action, 'BLOCK');
            });
            it('Меняем свойство action на новое', () => {
                let b = new Boxer()
                b.setState({action: 'BLOCK'});
                assert.strictEqual(b.state.action, 'BLOCK');
                b.setState({action: 'HIT'});
                assert.strictEqual(b.state.action, 'HIT');
            });
            it('Применяем setState() с пустым аргументом', () => {
                let b = new Boxer()
                b.setState({action: 'BLOCK'});
                assert.strictEqual(b.state.action, 'BLOCK');
                b.setState({});
                assert.strictEqual(b.state.action, 'BLOCK');
            });
            it('Изменяем здоровье на 0', () => {
                let b = new Boxer()
                b.setState({life: 150});
                assert.strictEqual(b.state.life, 150);
                b.setState({life: 0});
                assert.strictEqual(b.state.life, 0);
            });
        });
        describe("move()", () => {    
            it('Шаг вправо в допустимых границах', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.move('RIGHT');
                assert.strictEqual(b.state.x, 30);
                assert.strictEqual(b.state.face, 40);
                assert.strictEqual(b.state.fist, 50);
                assert.strictEqual(b.state.back, 180);
            });
            it('Шаг влево в допустимых границах', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:30, face:40, fist: 50, back: 180};
                b.move('LEFT');
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 20);
                assert.strictEqual(b.state.back, 150);
            });
            it('Шаг вправо за допустимые границы', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:470, face:480, fist: 490, back: 620};
                b.move('RIGHT');
                assert.strictEqual(b.state.x, 470);
                assert.strictEqual(b.state.face, 480);
                assert.strictEqual(b.state.fist, 490);
                assert.strictEqual(b.state.back, 620);
            });
            it('Шаг влево за допустимые границы', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.move('LEFT');
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 20);
                assert.strictEqual(b.state.back, 150);
            });
        });
        describe("action()", () => {    
            it('STAND', () => {
                let b = new Boxer();
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('STAND');
                assert.strictEqual(b.state.action, 'STAND');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 1);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 10);
                assert.strictEqual(b.state.back, 150);
            });
            it('FRONTHIT', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('FRONTHIT');
                assert.strictEqual(b.state.action, 'FRONTHIT');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 10+160*1);
                assert.strictEqual(b.state.back, 150);
            });
            it('UPPERHIT', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('UPPERHIT');
                assert.strictEqual(b.state.action, 'UPPERHIT');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 10+160*1);
                assert.strictEqual(b.state.back, 150);
            });
            it('LOWERHIT', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('LOWERHIT');
                assert.strictEqual(b.state.action, 'LOWERHIT');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 10+160*1);
                assert.strictEqual(b.state.back, 150);
            });
            it('BLOCK', () => {
                let b = new Boxer();
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('BLOCK');
                assert.strictEqual(b.state.action, 'BLOCK');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 10);
                assert.strictEqual(b.state.back, 150);
            });
            it('RIGHT', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:0, face:10, fist: 20, back: 150};
                b.action('RIGHT');
                assert.strictEqual(b.state.action, 'RIGHT');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 30);
                assert.strictEqual(b.state.face, 40);
                assert.strictEqual(b.state.fist, 50);
                assert.strictEqual(b.state.back, 180);
            });
            it('LEFT', () => {
                let b = new Boxer();
                b.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
                b.state = {action:'START', life:100, block:0, x:30, face:40, fist: 50, back: 180};
                b.action('LEFT');
                assert.strictEqual(b.state.action, 'LEFT');
                assert.strictEqual(b.state.life, 100);
                assert.strictEqual(b.state.block, 0);
                assert.strictEqual(b.state.x, 0);
                assert.strictEqual(b.state.face, 10);
                assert.strictEqual(b.state.fist, 20);
                assert.strictEqual(b.state.back, 150);
            });
        });
    });
});