import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('<h2> debe tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount(Counter)
        const h2 = wrapper.find('h2')

        // Revisa que exista la etiqueta
        expect(wrapper.find('h2').exists()).toBe(true)

        // Revisa que el texto contenga 'Counter'
        console.log(h2.text())
        expect(h2.text()).toBe('Counter')
    })

    test('El valor por defecto tiene que ser 10 en el <p>', () => {
        const wrapper = shallowMount(Counter)
        const pTags = wrapper.findAll('p')
        const pTest = wrapper.find('[datatest-id="counter"]').text()

        // Revisa que la segunda etiqueta 'p' tenga el valor 100
        expect(pTags[0].text()).toBe('10')
        expect(pTest).toBe('10')
    })

})