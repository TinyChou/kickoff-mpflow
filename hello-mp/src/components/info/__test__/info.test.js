import path from 'path'
import simulate from 'miniprogram-simulate'

describe('info', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../info'), { less: true })
    })

    test('should match snapshot', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
