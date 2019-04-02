import Matrix2 from '../../../Library/Math/Matrix2.js'
import TestMatrix from './TestMatrix.js'

export default class TestMatrix2 extends TestMatrix 
{
    constructor() {
        super()
        console.info('testing Matrix2')
        this.AddTest()
        this.SubTest()
        this.MulTest()
        this.MulIdentityTest()
        this.RotTest()
    }


    AddTest() {
        console.info('test Matrix2.add()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            5, 6,
            7, 8,
        ]
        const expected = [
            6, 8,
            10, 12,
        ]
        const m = new Matrix2(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }


    SubTest() {
        console.info('test Matrix2.sub()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            9, 8,
            7, 6,
        ]
        const expected = [
            -8, -6,
            -4, -2,
        ]
        const m = new Matrix2(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    MulTest() {
        console.info('test Matrix2.mul()')
        const a = [
            1, 2,
            3, 4,
        ]
        const b = [
            2, -1,
            -1, 2,
        ]
        const expected = [
            0, 3,
            2, 5,
        ]
        const m = new Matrix2(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    MulIdentityTest() 
    {
        console.info('test Matrix2.mul() by identity matrix')
        const a = [
            1, 2,
            3, 4,
        ]
        const i = [
            1, 0,
            0, 1,
        ]
        const expected = [
            1, 2,
            3, 4,
        ]
        const m = new Matrix2(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    RotTest() {
        console.info('test Matrix2.rot()')
        const α = 90
        const a = [
            3, 0,
            1, 0,
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix2(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}