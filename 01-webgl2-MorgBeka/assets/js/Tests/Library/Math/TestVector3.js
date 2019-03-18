import Vector3 from '../../../Library/Math/Vector3.js'

export default class TestVector3
{
  constructor()
  {
    // super()
    console.info('test Vector3')
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testRotx()
    this.testRoty()
    this.testRotz()
  }

  testAdd()
  {
    console.log('test Vector3.add()')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const x2 = 2
    const y2 = 1
    const z2 = 8
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'x2=', x2, 'y2=', y2, 'z2=', z2)
    const expectedx = 10
    const expectedy = 5
    const expectedz = 10
    const v1 = new Vector3(x1, y1, z1)
    const v2 = new Vector3(x2, y2, z2)
    v1.add(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  
  testSub()
  {
    console.log('test Vector3.sub()')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const x2 = 2
    const y2 = 1
    const z2 = 8
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'x2=', x2, 'y2=', y2, 'z2=', z2)
    const expectedx = 6
    const expectedy = 3
    const expectedz = -6
    const v1 = new Vector3(x1, y1, z1)
    const v2 = new Vector3(x2, y2, z2)
    v1.sub(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  testScalar()
  {
    console.log('test Vector3.scalar()')
    const x = 2
    const y = 3
    const z = 6
    const a = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'x2=', x, 'y2=', y, 'z2=', z)
    const expectedx = 4
    const expectedy = 6
    const expectedz = 11
    const v1 = new Vector3(x, y, z)
    const v2 = new Vector3(x, y, z)
    v1.scalar(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  testRotx()
  {
    console.log('test Vector3.rotx()')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 10

    const v = new Vector3(x, y, z)
    v.rotx(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  testRoty()
  {
    console.log('test Vector3.roty()')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = -6

    const v = new Vector3(x, y, z)
    v.roty(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }


  testRotz()
  {
    console.log('test Vector3.rotz()')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3

    const v = new Vector3(x, y, z)
    v.rotz(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }


  assertIdentical(actualx,actualy, actualz, expectedx, expectedy,expectedz)
  {
    const actualroundx = Math.round(actualx)
    const actualroundy = Math.round(actualy)
    const actualroundz = Math.round(actualz)
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
  }
}