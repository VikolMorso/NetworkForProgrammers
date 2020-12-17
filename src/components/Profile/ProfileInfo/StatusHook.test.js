
describe('Profile', ()=>{
    test('status', ()=>{
        const component = ReactDOM.create(<StatusHook status='it-kam' />)
        const instance = component.getInstance();
        expect(instanse.state.status).toBe('it-kam')

    })
})