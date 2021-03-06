var index = require("../index.js")

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Joe"', () => {
      expect(index.name).toEqual("Susan")
    })
  })


  describe("Height", () => {
    it("is equal to 40", () => {
      expect(index.height).toEqual(40)
    })
  })

  describe("Message", () => {
    it("gives the {name} and {height}", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
