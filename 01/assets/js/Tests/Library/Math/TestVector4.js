import Vector4 from '../../../Library/Math/Vector4.js'

export default class TestVector4
{
  constructor()
  {
    // super()
    console.info('test Vector4')
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testRotx()
    this.testRoty()
    this.testRotz()
  }

  testAdd()
  {
    console.log('test Vector4.add()')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const w1 = 2
    const x2 = 2
    const y2 = 1
    const z2 = 8
    const w2 = 8
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'w1=', w1, 'x2=', x2, 'y2=', y2, 'z2=', z2, 'w2=', w2)
    const expectedx = 10
    const expectedy = 5
    const expectedz = 10
    const expectedw = 10
    const v1 = new Vector4(x1, y1, z1, w1)
    const v2 = new Vector4(x2, y2, z2, w2)
    v1.add(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    const actualw = v1.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  
  testSub()
  {
    console.log('test Vector4.sub()')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const w1 = 2
    const x2 = 2
    const y2 = 1
    const z2 = 8
    const w2 = 8
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'w1=', w1, 'x2=', x2, 'y2=', y2, 'z2=', z2, 'w2=', w2)
    const expectedx = 6
    const expectedy = 3
    const expectedz = -6
    const expectedw = -6
    const v1 = new Vector4(x1, y1, z1, w1)
    const v2 = new Vector4(x2, y2, z2, w2)
    v1.sub(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    const actualw = v1.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  testScalar()
  {
    console.log('test Vector4.scalar()')
    const x = 2
    const y = 3
    const z = 6
    const w = 6
    const a = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'w1=', w, 'x2=', x, 'y2=', y, 'z2=', z, 'w2=', w)
    const expectedx = 4
    const expectedy = 6
    const expectedz = 12
    const expectedw = 12
    const v = new Vector4(x, y, z, w)
    v.scalar(a)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  testRotx()
  {
    console.log('test Vector4.rotx()')
    const x = 2
    const y = 3
    const z = 4
    const w = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'w1=', w, 'x2=', x, 'y2=', y, 'z2=', z, 'w2=', w)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 2
    const expectedw = 2

    const v = new Vector4(x, y, z, w)
    v.rotx(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }


  testRoty()
  {
    console.log('test Vector4.roty()')
    const x = 2
    const y = 3
    const z = 4
    const w = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'w1=', w, 'x2=', x, 'y2=', y, 'z2=', z, 'w2=', w)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 2
    const expectedw = 2

    const v = new Vector4(x, y, z, w)
    v.roty(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }


  testRotz()
  {
    console.log('test Vector4.rotz()')
    const x = 2
    const y = 3
    const z = 4
    const w = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'w1=', w, 'x2=', x, 'y2=', y, 'z2=', z, 'w2=', w)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 2
    const expectedw = 2

    const v = new Vector4(x, y, z, w)
    v.rotz(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  testRotw()
  {
    console.log('test Vector4.rotw()')
    const x = 2
    const y = 3
    const z = 4
    const w = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'w1=', w, 'x2=', x, 'y2=', y, 'z2=', z, 'w2=', w)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 2
    const expectedw = 2
    
    const v = new Vector4(x, y, z, w)
    v.rotw(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  {
    const actualroundx = Math.round(actualx)
    const actualroundy = Math.round(actualy)
    const actualroundz = Math.round(actualz)
    const actualroundw = Math.round(actualw)
    if (actualroundx === expectedx) {
      console.log('PASS', `actual: ${actualroundx}`)
    } else {
      console.error('FAIL', `actual: ${actualroundx}`)
    }
    if (actualroundy === expectedy) {
      console.log('PASS', `actual: ${Math.round(actualroundy)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundy}`)
    }
    if (actualroundz === expectedz) {
      console.log('PASS', `actual: ${Math.round(actualroundz)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundz}`)
    }
    if (actualroundw === expectedw) {
      console.log('PASS', `actual: ${Math.round(actualroundw)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundw}`)
    }
  }
}