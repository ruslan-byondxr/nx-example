import { shuffle } from '@stores/utils'

describe('utils', () => {
  it('should test shuffle array of numbers', () => {
    const nums = [1, 2, 3, 4, 5]
    const randomNums = shuffle([...nums])
    const isEqual = nums.every((item, index) => item === randomNums[index])
    expect(isEqual).toBeFalsy()
  })

  it('should test shuffle array of objects', () => {
    const users = [
      {
        name: 'john',
        age: 23,
      },
      {
        name: 'rex',
        age: 56,
      },
      {
        name: 'mason',
        age: 45,
      },
      {
        name: 'becky',
        age: 30,
      },
    ]
    const randomUsers = shuffle([...users])
    const isEqual = users.every(
      (item, index) => item.name === randomUsers[index]?.name
    )

    expect(isEqual).toBeFalsy()
  })
})
