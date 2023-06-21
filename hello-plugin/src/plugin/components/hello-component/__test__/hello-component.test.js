import path from 'path'
import simulate from 'miniprogram-simulate'

describe('hello-component', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../hello-component'), { less: true })
    })

    test('should match snapshot', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
