let {sum, obj, string, callback, fetchData, fetchData1, print}=require('./sum');

beforeEach(()=>{
    console.warn(print())
})

test('test case 1',()=>{
    expect(sum(10,20)).toBe(30)
})

test('test case 2',()=>{
    expect(sum(20,30)).toBe(50)
})

test('string test',()=>{
    expect(string("Hello")).toMatch("Hello")
})

test("sub string test",()=>{
    expect(string('Hello')).toMatch(/ll/)
})

test('callback test',(done)=>{
    function cb(data){
        try {
            expect(data).toBe('hello')
            done()
        } catch (error) {
            done(error)
        }
    }
    callback(cb)
})

test('object test',()=>{
    expect(obj()).toEqual({name:"Manu"})
})

test('promise test',()=>{
    fetchData().then((data)=>{
        expect(data).toBe("Hello")
    })
})

test('async/await test',async()=>{
    let data=await fetchData1()
    expect(data).toBe('done')
})