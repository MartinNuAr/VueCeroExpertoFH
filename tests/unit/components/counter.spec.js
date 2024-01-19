import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('<h2> debe tener el valor por defecto "Counter"', () => {
        const h2 = wrapper.find('h2')

        // Revisa que exista la etiqueta
        expect(wrapper.find('h2').exists()).toBe(true)

        // Revisa que el texto contenga 'Counter'
        console.log(h2.text())
        expect(h2.text()).toBe('Counter')
    })

    test('El valor por defecto tiene que ser 10 en el <p>', () => {
        const pTags = wrapper.findAll('p')
        const pTest = wrapper.find('[datatest-id="counter"]').text()

        // Revisa que la segunda etiqueta 'p' tenga el valor 100
        expect(pTags[0].text()).toBe('10')
        expect(pTest).toBe('10')
    })

    test('Debe incrementar en 1 el valor del contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        // Incrementa en 3 el valor
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        // Reduce en 2 el valor
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[datatest-id="counter"]').text()

        expect(value).toBe('11')
    })

    test('Debe establecer el valor por defecto', () => {
        const start = wrapper.props('start')
        const value = Number(wrapper.find('[datatest-id="counter"]').text())

        expect(value).toBe(10)
    })

    test('Debe mostrar la prop title', () => {
        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })


    })

})