import TestMatrix2 from './Library/Math/TestMatrix2.js'
import TestMatrix3 from './Library/Math/TestMatrix3.js'
import TestMatrix4 from './Library/Math/TestMatrix4.js'
import TestVector2 from './Library/Math/TestVector2.js'
import TestVector3 from './Library/Math/TestVector3.js'
import TestVector4 from './Library/Math/TestVector4.js'

/** Class to run tests. */
export default class Tests {
    constructor() {
        console.log('Running Tests…')
    new TestVector2()
    new TestVector3()
    new TestVector4()
    new TestMatrix2()
    new TestMatrix3()
    new TestMatrix4()
    }
}