import path from 'path'
import simulate from 'miniprogram-simulate'

describe('cells', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../cells'), { less: true })
    })

    test('should match snapshot', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
