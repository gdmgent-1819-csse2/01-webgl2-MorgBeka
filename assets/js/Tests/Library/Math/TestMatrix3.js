import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'


export default class TestMatrix3 extends TestMatrix {
 
    constructor() {
        super()
        console.info('testing Matrix3')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRotx()
        this.testRoty()
        this.testRotz()
    }

    testAdd() {
        console.info('test Matrix3.add()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9, 
        ]
        const b = [
            5, 6, 7,
            8, 9, 10, 
            11, 12, 13, 
        ]
        const expected = [
            6, 8, 10, 
            12, 14, 16,
            18, 20, 22, 
        ]
        const m = new Matrix3(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

   
    testSub() {
        console.info('test Matrix3.sub()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9, 
        ]
        const b = [
            9, 8, 7,
            6, 5, 4, 
            3, 2, 1, 
        ]
        const expected = [
            -8, -6, -4, 
            -2, 0, 2,
            4, 6, 8, 
        ]
        const m = new Matrix3(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

   
    testMul() {
        console.info('test Matrix3.mul()')
        const a = [
            5, -9, 2,
            -3, 4, -5,
            9, 3, 1, 
        ]
        const b = [
            3, 4, 6, 
            2, 3, 5, 
            5, 7, 11,
        ]
        const expected = [
            7, 7, 7,
            -26, -35, -53,
            38, 52, 80,
        ]
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }


    testMulIdentity() {
        console.info('test Matrix3.mul() by identity matrix')
        const a = [
            5, -9, 2,
            -3, 4, -5,
            9, 3, 1, 
        ]
        const i = [
            1, 0, 0, 
            0, 1, 0, 
            0, 0, 1,
        ]
        const expected = [
            5, -9, 2,
            -3, 4, -5,
            9, 3, 1, 
        ]
        const m = new Matrix3(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    testRotx() {
        console.info('test Matrix3.rot()')
        const α = 90
        const a = [
            3, 0, 2,
            1, 0, 4,
            3, 6, 8, 
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix3(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }

    testRoty() {
        console.info('test Matrix3.rot()')
        const α = 90
        const a = [
            3, 0, 2,
            1, 0, 4,
            3, 6, 8, 
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix3(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }

    testRotz() {
        console.info('test Matrix3.rot()')
        const α = 90
        const a = [
            3, 0, 2,
            1, 0, 4,
            3, 6, 8, 
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix3(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}