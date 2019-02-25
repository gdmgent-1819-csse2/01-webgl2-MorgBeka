import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix4 class. */
export default class TestMatrix4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix4')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix4.add()')
        const a = [
            1, 2, 3, 4,
            5, 6, 7, 8, 
            9, 10, 11, 12, 
            13, 14, 15, 16, 
        ]
        const b = [
            5, 6, 7, 8,
            9, 10, 11, 12,  
            13, 14, 15, 16, 
            17, 18, 19, 20,  
        ]
        const expected = [
            6, 8, 10, 12, 
            14, 16, 18, 20, 
            22, 24, 26, 28,  
            30, 32, 34, 36,  
        ]
        const m = new Matrix4(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix4.sub()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8, 
            9, 10, 11, 12,  
            13, 14, 15, 16 
        ]
        const b = [
            9, 8, 7, 6,
            5, 4, 3, 2, 
            1, 0, 1, 2, 
            3, 4, 5, 6, 

        ]
        const expected = [
            -8, -6, -4, -2, 
            0, 2, 4, 6,
            8, 10, 10, 10,
            10, 10, 10, 10, 
        ]
        const m = new Matrix4(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix4.mul()')
        const a = [
            5, -9, 2, 1,
            -3, 4, -5, 8,
            9, 3, 1, 9,
            10, 12, 14, 16, 
        ]
        const b = [
            3, 4, 6, 7,
            2, 3, 5, 6,
            5, 7, 11, 13,
            11, 13, 15, 17, 
        ]
        const expected = [
            18, 20, 22, 24, 
            62, 69, 67, 74, 
            137, 169, 215, 247,
            300, 382, 514, 596,
        ]
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix4.mul() by identity matrix')
        const a = [
            5, -9, 2, 1,
            -3, 4, -5, 8,
            9, 3, 1, 9,
            10, 12, 14, 16, 


        ]
        const i = [
            1, 0, 0, 0,
            0, 1, 0, 0,  
            0, 0, 1, 0,
            0, 0, 0, 1, 
        ]
        const expected = [
            5, -9, 2, 1,
            -3, 4, -5, 8,
            9, 3, 1, 9, 
            10, 12, 14, 16,
        ]
        const m = new Matrix4(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     */
    testRot() {
        console.info('test Matrix4.rot()')
        const α = 90
        const a = [
            3, 0,
            1, 0,
        ]
        const expected = [
            -1, 0,
            3, 0,
        ]
        const m = new Matrix4(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}